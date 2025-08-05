// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ContactsPlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "ContactsPlugin",
            targets: ["ContactPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "ContactPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ContactPluginPlugin"),
        .testTarget(
            name: "ContactPluginPluginTests",
            dependencies: ["ContactPluginPlugin"],
            path: "ios/Tests/ContactPluginPluginTests")
    ]
)