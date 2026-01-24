export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm">
            <span className="text-green-500">$</span>
            <span className="text-text-primary ml-1">claude-code</span>
            <span className="text-text-muted">@</span>
            <span className="text-orange">ios</span>
            <span className="text-text-muted ml-2">// Built with Claude Code</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://x.com/Rektoooooo"
              className="text-text-muted hover:text-text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter-x text-lg"></i>
            </a>
            <a
              href="https://github.com/Rektoooooo"
              className="text-text-muted hover:text-text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github text-lg"></i>
            </a>
            <a
              href="https://sebkucera.dev"
              className="text-text-muted hover:text-text-primary text-sm font-mono transition-colors"
            >
              sebkucera.dev
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center space-y-2">
          <p className="text-text-muted text-sm">
            <i className="bi bi-app-indicator mr-2"></i>
            Apps: <a href="https://github.com/Rektoooooo/ShadowLift" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">ShadowLift</a> | <a href="https://github.com/Rektoooooo/HabitFlow" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">HabitOwl</a> | <a href="https://github.com/Rektoooooo/MealPrepAI" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">MealPrepAI</a>
          </p>
          <p className="text-text-muted text-xs">
            Design inspired by <a href="https://skillsmp.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">skillsmp.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
