---
name: ios-app-store
description: App Store expert for iOS app submission and distribution. Use when preparing for App Store submission, review guidelines, metadata, screenshots, TestFlight, app signing, or resolving rejection issues.
---

# iOS App Store

Expert guidance for App Store submission and distribution.

## Pre-Submission Checklist

### App Requirements
- [ ] Minimum iOS version set correctly
- [ ] All device sizes supported (or properly restricted)
- [ ] App icon in all required sizes
- [ ] Launch screen configured
- [ ] Privacy policy URL (if collecting data)
- [ ] App tested on physical devices
- [ ] No placeholder content
- [ ] No private API usage

### Common Rejection Reasons
1. **Crashes and bugs** - Test thoroughly
2. **Broken links** - Verify all URLs
3. **Placeholder content** - Remove Lorem Ipsum, test images
4. **Incomplete metadata** - Fill all required fields
5. **Misleading descriptions** - Accurate feature descriptions
6. **Privacy issues** - Proper data handling disclosure

## App Store Connect

### App Information
```
# Required fields
- App Name (30 characters max)
- Subtitle (30 characters max)
- Privacy Policy URL
- Primary Category
- Secondary Category (optional)
- Content Rights
- Age Rating
```

### Version Information
```
# Per version
- Version Number (1.0.0)
- What's New (4000 characters max)
- Description (4000 characters max)
- Keywords (100 characters max)
- Support URL
- Marketing URL (optional)
```

### Screenshots Requirements
```
# iPhone
- 6.9" (iPhone 16 Pro Max): 1320 x 2868 or 1290 x 2796
- 6.5" (iPhone 14 Plus): 1284 x 2778 or 1242 x 2688
- 5.5" (iPhone 8 Plus): 1242 x 2208

# iPad
- 12.9" iPad Pro: 2048 x 2732
- 11" iPad Pro: 1668 x 2388

# Minimum: 2 screenshots per size
# Maximum: 10 screenshots per size
```

### App Preview Videos
```
- 15-30 seconds
- App content only (no hands/devices)
- No pricing info
- Same dimensions as screenshots
```

## Privacy & Data

### App Privacy Details
```swift
// Types to declare:
// - Contact Info (name, email, phone)
// - Health & Fitness
// - Financial Info
// - Location
// - Contacts
// - User Content
// - Browsing History
// - Search History
// - Identifiers
// - Usage Data
// - Diagnostics
```

### Privacy Manifest (iOS 17+)
```swift
// PrivacyInfo.xcprivacy
// Required for:
// - Apps using required reason APIs
// - SDKs

// Example APIs requiring declaration:
// - NSUserDefaults
// - File timestamp APIs
// - System boot time APIs
// - Disk space APIs
```

### Required Reason APIs
```xml
<!-- PrivacyInfo.xcprivacy -->
<dict>
    <key>NSPrivacyAccessedAPITypes</key>
    <array>
        <dict>
            <key>NSPrivacyAccessedAPIType</key>
            <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
            <key>NSPrivacyAccessedAPITypeReasons</key>
            <array>
                <string>CA92.1</string>
            </array>
        </dict>
    </array>
</dict>
```

## TestFlight

### Internal Testing
```
- Up to 100 internal testers
- App Store Connect users only
- No review required
- Immediate availability
```

### External Testing
```
- Up to 10,000 testers
- Public link option
- Beta App Review required
- 90-day expiration
```

### TestFlight Best Practices
```swift
// Build number increment
// Format: YYYYMMDDHHMM or sequential

// What to Test notes
// - Clear testing instructions
// - Known issues
// - Features to focus on

// Feedback collection
// - In-app feedback mechanism
// - TestFlight feedback system
```

## Code Signing

### Certificates
```
# Development
- iOS App Development
- Installed on dev machine
- For development builds

# Distribution
- iOS Distribution (App Store)
- Required for App Store submission
- Or Ad Hoc for direct distribution
```

### Provisioning Profiles
```
# Types
- Development: Testing on devices
- App Store: App Store submission
- Ad Hoc: Direct device distribution
- Enterprise: Internal distribution

# Automatic Signing (Recommended)
# Xcode manages profiles automatically
```

### Entitlements
```xml
<!-- MyApp.entitlements -->
<dict>
    <key>aps-environment</key>
    <string>production</string>
    <key>com.apple.developer.icloud-container-identifiers</key>
    <array>
        <string>iCloud.com.myapp</string>
    </array>
</dict>
```

## Archive & Upload

### Build Settings
```swift
// Release configuration
// - Optimization: Fastest, Smallest
// - Debug Info: DWARF with dSYM
// - Strip Swift Symbols: Yes

// Version & Build
// CFBundleShortVersionString: 1.0.0 (marketing)
// CFBundleVersion: 1 (build number, increment each upload)
```

### Archive Process
```
1. Select "Any iOS Device" destination
2. Product > Archive
3. Organizer opens
4. Validate App (catches common issues)
5. Distribute App > App Store Connect
```

### Xcode Cloud
```yaml
# ci_scripts/ci_post_clone.sh
#!/bin/sh
# Run after repository clone

# ci_scripts/ci_pre_xcodebuild.sh
#!/bin/sh
# Run before build

# ci_scripts/ci_post_xcodebuild.sh
#!/bin/sh
# Run after build
```

## App Review Guidelines

### Common Guidelines
```
# 1. Safety
- User Generated Content moderation
- Objectionable content filters
- Reporting mechanisms

# 2. Performance
- Accurate descriptions
- Complete functionality
- Stable performance

# 3. Business
- Clear pricing
- Subscription terms visible
- Refund information

# 4. Design
- Apple UI guidelines
- Proper permissions usage
- No misleading UI elements

# 5. Legal
- Privacy compliance
- Data handling transparency
- Terms of service
```

### Permissions Usage
```swift
// Only request when needed
// Provide clear context

// Example: Camera permission
// Before: "Camera access needed"
// After: "Take photos for your profile picture"

// Info.plist descriptions must be meaningful
<key>NSCameraUsageDescription</key>
<string>Take photos to create workout progress pictures</string>
```

### Handling Rejection

```
1. Read rejection reason carefully
2. Check specific guideline cited
3. Options:
   - Fix and resubmit
   - Reply with clarification
   - Request phone call with reviewer
   - Appeal to App Review Board
```

## In-App Purchases

### Required for Digital Goods
```
- App features
- Subscriptions
- Digital content
- Virtual currencies

// NOT required for:
- Physical goods
- Real-world services
- Person-to-person services
```

### Price Tiers
```
# Apple manages international pricing
# Select tier, Apple converts
# 30% commission (15% for small business)
# Subscriptions: 30% first year, 15% after
```

## App Analytics

### App Store Connect Analytics
```
- Impressions
- Product Page Views
- App Units (downloads)
- In-App Purchases
- Sales
- Crashes
- Retention
```

### Responding to Reviews
```
# Best practices:
- Respond within 24-48 hours
- Be professional and helpful
- Offer solutions
- Don't be defensive
- Thank users for feedback
```

## Updates & Maintenance

### Version Updates
```
# When to update:
- Bug fixes
- New features
- iOS compatibility
- Security patches

# Update metadata:
- Update "What's New"
- Update screenshots if UI changed
- Update keywords if relevant
```

### Phased Release
```
# Gradual rollout over 7 days:
# Day 1: 1%
# Day 2: 2%
# Day 3: 5%
# Day 4: 10%
# Day 5: 20%
# Day 6: 50%
# Day 7: 100%

# Can pause or expedite
```

## Apple Documentation

- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [App Store Connect Help](https://help.apple.com/app-store-connect/)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [TestFlight](https://developer.apple.com/testflight/)
- [Code Signing](https://developer.apple.com/support/code-signing/)
- [App Analytics](https://developer.apple.com/app-store-connect/analytics/)
