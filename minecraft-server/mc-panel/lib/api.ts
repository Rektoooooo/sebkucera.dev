const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

// The login call is the one request where a 401 is an expected answer rather
// than an expired session, so it must not trigger the redirect below.
const LOGIN_ENDPOINT = '/auth/login';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

function redirectToLogin() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    // window.location bypasses the Next router, which is what applies basePath.
    window.location.href = `${BASE_PATH}/login`;
  }
}

// FastAPI reports errors as {"detail": "..."}; surface that instead of the
// raw JSON envelope so the UI can show a usable message.
async function readError(response: Response, fallback: string): Promise<string> {
  const body = await response.text();
  if (!body) return fallback;

  try {
    const detail = JSON.parse(body).detail;
    return typeof detail === 'string' ? detail : body;
  } catch {
    return body;
  }
}

export const api = {
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401 && endpoint !== LOGIN_ENDPOINT) {
      redirectToLogin();
      throw new ApiError(401, 'Unauthorized');
    }

    if (!response.ok) {
      throw new ApiError(response.status, await readError(response, 'Request failed'));
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }

    return response as T;
  },

  get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  },

  post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  // Authenticated file download: fetch as blob with the Bearer header, then
  // hand it to the browser. (window.open can't send auth headers.)
  async download(endpoint: string, filename: string): Promise<void> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (response.status === 401) {
      redirectToLogin();
      throw new ApiError(401, 'Unauthorized');
    }
    if (!response.ok) {
      throw new ApiError(response.status, await readError(response, 'Download failed'));
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  },

  // Fetch an authenticated binary endpoint into an object URL for <img> use.
  // Returns null on 404 (e.g. no server icon set yet).
  async fetchBlobUrl(endpoint: string): Promise<string | null> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (response.status === 404) return null;
    if (!response.ok) {
      throw new ApiError(response.status, await readError(response, 'Request failed'));
    }
    return URL.createObjectURL(await response.blob());
  },

  // XHR-based upload so we get progress events (fetch has none for uploads).
  uploadWithProgress<T>(
    endpoint: string,
    file: File,
    onProgress: (percent: number) => void
  ): Promise<T> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return new Promise<T>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${API_BASE_URL}${endpoint}`);
      if (token) xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
      };
      xhr.onload = () => {
        if (xhr.status === 401) {
          redirectToLogin();
          reject(new ApiError(401, 'Unauthorized'));
          return;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch {
            resolve(xhr.responseText as T);
          }
        } else {
          let message = xhr.responseText || 'Upload failed';
          try {
            const detail = JSON.parse(xhr.responseText).detail;
            if (typeof detail === 'string') message = detail;
          } catch {}
          reject(new ApiError(xhr.status, message));
        }
      };
      xhr.onerror = () => reject(new ApiError(0, 'Network error during upload'));
      const formData = new FormData();
      formData.append('file', file);
      xhr.send(formData);
    });
  },

  upload<T>(endpoint: string, file: File): Promise<T> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const formData = new FormData();
    formData.append('file', file);

    const headers: Record<string, string> = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: formData,
    }).then(async (response) => {
      if (response.status === 401) {
        redirectToLogin();
        throw new ApiError(401, 'Unauthorized');
      }

      if (!response.ok) {
        throw new ApiError(response.status, await readError(response, 'Upload failed'));
      }

      return response.json();
    });
  },
};

export const WS_BASE_URL = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8080';
