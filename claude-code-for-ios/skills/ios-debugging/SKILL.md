---
name: ios-debugging
description: iOS debugging expert for troubleshooting and profiling. Use when working with Instruments, Time Profiler, Memory Graph, LLDB, breakpoints, console logging, or performance analysis.
---

# iOS Debugging

Expert guidance for debugging and profiling iOS applications.

## Console Logging

### os_log (Recommended)
```swift
import os.log

let logger = Logger(subsystem: "com.myapp", category: "networking")

// Log levels
logger.debug("Debug message")       // Not shown in release
logger.info("Info message")
logger.notice("Notice message")
logger.warning("Warning message")
logger.error("Error message")
logger.critical("Critical message")

// With interpolation
logger.info("User \(userID, privacy: .private) logged in")
logger.debug("Processing \(items.count) items")
```

### Structured Logging
```swift
extension Logger {
    static let network = Logger(subsystem: "com.myapp", category: "network")
    static let database = Logger(subsystem: "com.myapp", category: "database")
    static let ui = Logger(subsystem: "com.myapp", category: "ui")
}

// Usage
Logger.network.info("Request started: \(url)")
Logger.database.debug("Query executed in \(duration)ms")
```

### Privacy in Logs
```swift
// Hide sensitive data
logger.info("Email: \(email, privacy: .private)")
logger.info("Token: \(token, privacy: .sensitive)")

// Show in debug, hide in release
logger.info("UserID: \(userID, privacy: .auto)")

// Always show (public data only)
logger.info("Item count: \(count, privacy: .public)")
```

## LLDB Debugger

### Common Commands
```lldb
# Print variable
po myVariable
p myVariable

# Print with format
p/x myInt        # Hexadecimal
p/t myInt        # Binary
p/d myInt        # Decimal

# Expression evaluation
expr myVariable = newValue
expr print(myObject.description)

# View memory
memory read myPointer
x/4xw myPointer  # 4 words in hex

# Backtrace
bt               # Full backtrace
bt 5             # Last 5 frames

# Thread info
thread list
thread select 2

# Continue execution
c                # Continue
n                # Next (step over)
s                # Step (step into)
finish           # Step out
```

### Breakpoint Commands
```lldb
# Set breakpoint
breakpoint set -n functionName
breakpoint set -f ViewController.swift -l 42

# Conditional breakpoint
breakpoint set -n myFunction -c "count > 10"

# Breakpoint action
breakpoint command add 1
> po self.items
> continue
> DONE

# Watchpoint (break on value change)
watchpoint set variable myVariable
```

### Swift-Specific
```swift
// In LLDB
expr import UIKit
expr let view = unsafeBitCast(0x12345678, to: UIView.self)
expr view.backgroundColor = .red

// Print SwiftUI state
po _state
```

## Breakpoints in Xcode

### Symbolic Breakpoint
```
Symbol: -[UIViewController viewDidLoad]
Module: UIKitCore
Action: Log Message "VC loaded: @(id)@"
```

### Exception Breakpoint
- Add Exception Breakpoint
- Break on: All Exceptions
- Exception: Objective-C (or All)

### Swift Error Breakpoint
- Add Swift Error Breakpoint
- Catches all thrown errors

### Conditional Breakpoint
```swift
// Condition
item.id == "problem-id"

// Ignore count
5  // Skip first 5 hits
```

## Instruments

### Time Profiler
1. Product > Profile (Cmd+I)
2. Select Time Profiler
3. Record and interact with app
4. Analyze call tree

```swift
// Add signposts for custom intervals
import os.signpost

let log = OSLog(subsystem: "com.myapp", category: .pointsOfInterest)

os_signpost(.begin, log: log, name: "DataProcessing")
processData()
os_signpost(.end, log: log, name: "DataProcessing")
```

### Allocations
1. Profile > Allocations
2. Look for:
   - Memory growth over time
   - Transient allocations
   - Persistent allocations

### Leaks
1. Profile > Leaks
2. Run app and perform actions
3. Check for leaked objects

### Network
1. Profile > Network
2. Monitor:
   - Request/response timing
   - Data transferred
   - Connection issues

## Memory Debugging

### Memory Graph Debugger
1. Run app
2. Debug Navigator > Memory
3. Click "Debug Memory Graph" button

### Finding Retain Cycles
```swift
// Use weak/unowned to break cycles
class ViewModel {
    var onComplete: (() -> Void)?

    func setup(view: View) {
        // Capture self weakly
        onComplete = { [weak self] in
            self?.handleComplete()
        }
    }
}
```

### Debug Memory Issues
```swift
// Track deallocations
deinit {
    print("ViewModel deinitialized")
}

// In LLDB
expr import Foundation
expr CFGetRetainCount(myObject)
```

## View Debugging

### View Hierarchy Debugger
1. Run app
2. Click "Debug View Hierarchy" button
3. Inspect 3D view hierarchy

### Runtime View Modifications
```lldb
# In LLDB
expr view.backgroundColor = UIColor.red
expr CATransaction.flush()
```

### Print View Hierarchy
```lldb
po view.value(forKey: "recursiveDescription")
```

## Network Debugging

### URLSession Logging
```swift
// Environment variable
CFNETWORK_DIAGNOSTICS = 3

// Or in code
URLSession.shared.configuration.urlCache?.removeAllCachedResponses()
```

### Charles Proxy / Proxyman
1. Install proxy app
2. Configure iOS Simulator to use proxy
3. Install root certificate

## Crash Analysis

### Crash Logs
```
# Location on device
Settings > Privacy > Analytics > Analytics Data

# Symbolicate in Xcode
Window > Devices and Simulators > View Device Logs
```

### Analyzing Crash
```
Exception Type: EXC_CRASH (SIGABRT)

Thread 0 Crashed:
0   libsystem_kernel.dylib     __pthread_kill
1   libsystem_c.dylib          abort
2   MyApp                      ViewController.buttonTapped + 123
```

## Performance Debugging

### Measure Code Performance
```swift
import os.signpost

let signpostID = OSSignpostID(log: log)

os_signpost(.begin, log: log, name: "Operation", signpostID: signpostID)
performOperation()
os_signpost(.end, log: log, name: "Operation", signpostID: signpostID)

// Or use CFAbsoluteTimeGetCurrent
let start = CFAbsoluteTimeGetCurrent()
performOperation()
let duration = CFAbsoluteTimeGetCurrent() - start
print("Duration: \(duration * 1000)ms")
```

### Main Thread Checker
```
Edit Scheme > Run > Diagnostics
✓ Main Thread Checker
```

### Thread Sanitizer
```
Edit Scheme > Run > Diagnostics
✓ Thread Sanitizer
```

### Address Sanitizer
```
Edit Scheme > Run > Diagnostics
✓ Address Sanitizer
```

## Debug-Only Code

```swift
#if DEBUG
print("Debug only message")
#endif

// Assert (debug only)
assert(condition, "Message")

// Precondition (always checked)
precondition(condition, "Message")

// Fatal error (always crashes)
fatalError("Unimplemented")
```

## Common Issues

### UI Not Updating
```swift
// Ensure main thread
DispatchQueue.main.async {
    self.label.text = newValue
}

// Or with MainActor
await MainActor.run {
    self.updateUI()
}
```

### Optional Unwrapping Crash
```swift
// Use safe unwrapping
if let value = optionalValue {
    use(value)
}

// Guard for early exit
guard let value = optionalValue else {
    return
}
```

### Debugging SwiftUI
```swift
// Print on body evaluation
let _ = print("Body evaluated")

// Self inspection
let _ = Self._printChanges()
```

## Apple Documentation

- [Debugging](https://developer.apple.com/documentation/xcode/debugging)
- [Instruments](https://developer.apple.com/documentation/xcode/gathering-information-about-memory-use)
- [LLDB](https://developer.apple.com/documentation/xcode/stepping-through-code-and-inspecting-variables-to-isolate-bugs)
- [os_log](https://developer.apple.com/documentation/os/logging)
- [Memory Management](https://developer.apple.com/documentation/xcode/diagnosing-memory-thread-and-crash-issues-early)
