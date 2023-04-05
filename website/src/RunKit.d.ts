// A semver range as a string. For example: "10.1.x" or "12.x.x".
// See https://docs.npmjs.com/about-semantic-versioning
type semverRange = string

// A string that represents CSS Pixels. A string that has a number with the 'px'
// suffix. For example: "10px".
// See https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel
type cssPxString = string


interface Window {
    RunKit: GlobalRunKit
}

interface GlobalRunKit {
    createNotebook: (options: EmbedOptions) => NotebookEmbed
}

interface EmbedOptions {
	element: HTMLElement // Parent element for the new notebook
	
	// Environment variables for the execution environment. Available under
	// `process.env`. Defaults to []
	environment?: Array<{name: string, value: string}>
	evaluateOnLoad?: boolean // Evaluate the Embed when it finishes loading.
	
	// Where the line numbers should appear. Defaults to "outside"
	gutterStyle?: "inside" | "none" | "outside"
	
	// Hides the "▶ Run" button. In Endpoint mode, Hides the endpoint URL.
	hidesActionButton?: boolean
	
	// In Endpoint mode, Hides the logs that would appear when hitting the Endpoint.
	// See https://runkit.com/docs/endpoint.
	hidesEndpointLogs?: boolean
	
	// Minimum height of the embed in pixels. E.g. "100px". Defaults to "73px"
	minHeight?: cssPxString
	
	// When in default mode RunKit Embeds behave like a regular notebook and display
	// outputs after each evaluation. When the Embed is in endpoint mode the outputs
	// are replaced by endpoint logs and a URL is provided to run the Embed code. See
	// https://runkit.com/docs/endpoint. Defaults to "default"
	mode?: "endpoint" | "default"
	
	// A semver range that the node engine should satisfy, e.g. "4.0.x" or ">
	// 6.9.2". Defaults to "10.x.x"
	nodeVersion?: semverRange
	source?: string // The source code of the Embed.
	
	// The timestamp in UTC milliseconds to recreate the state of package
	// availability. No packages published to npm after this time are available in this
	// embed. Useful for reproducing bugs, or guaranteeing dependency versions. By
	// default the timestamp is set to the time the embed is created.
	packageTimestamp?: number | null
	
	// Code in the preamble field will not be displayed in the embed, but will be
	// executed before running the code in the embed. For example, libraries that use
	// RunKit for documentation often require their package in the preamble to avoid
	// clutter in the embed code.
	preamble?: string
	readOnly?: boolean 
	tabSize?: number // An Integer Minimum of 0 Defaults to 4
	title?: string // The title of the RunKit Notebook when it is saved on RunKit.
}

interface NotebookEmbed {
	/// Methods
	destroy: () => void
	evaluate: () => void

	/// Events
	onEvaluate: () => void // Called when a cell is evaluated.
	
	// Called when the Embed has fully loaded. The function will be passed a
	// reference to the Embed.
	onLoad: (arg: NotebookEmbed) => void
	
	// Called when the embed cell is resized.
	onResize: (arg: {height: number}) => void
	onSave: () => void // Called when the embed is saved.
	
	// Called when the shareable URL or endpoint URL changes.
	onURLChanged: (arg: {shareableURL: string, endpointURL: string}) => void

	/// Properties
	
	// endpointURL
	// In Endpoint mode, this is the url that will run this code
	// when visited. See https://runkit.com/docs/endpoint.
	getEndpointURL: () => Promise<string>
	
	// environment
	// Environment variables for the execution environment.
	// Available under `process.env`. Defaults to []
	getEnvironment: () => Promise<Array<{name: string, value: string}>>
	setEnvironment: (environment: Array<{name: string, value: string}>) => Promise<undefined>
	
	// evaluateOnLoad
	// Evaluate the Embed when it finishes loading.
	getEvaluateOnLoad: () => Promise<boolean>
	
	// gutterStyle
	// Where the line numbers should appear. Defaults to "outside"
	getGutterStyle: () => Promise<"inside" | "none" | "outside">
	setGutterStyle: (gutterStyle: "inside" | "none" | "outside") => Promise<undefined>
	
	// hidesActionButton
	// Hides the "▶ Run" button. In Endpoint mode, Hides the endpoint URL.
	getHidesActionButton: () => Promise<boolean>
	setHidesActionButton: (hidesActionButton: boolean) => Promise<undefined>
	
	// hidesEndpointLogs
	// In Endpoint mode, Hides the logs that would appear when
	// hitting the Endpoint. See https://runkit.com/docs/endpoint.
	getHidesEndpointLogs: () => Promise<boolean>
	setHidesEndpointLogs: (hidesEndpointLogs: boolean) => Promise<undefined>
	
	// minHeight
	// Minimum height of the embed in pixels. E.g. "100px". Defaults to "73px"
	getMinHeight: () => Promise<cssPxString>
	setMinHeight: (minHeight: cssPxString) => Promise<undefined>
	
	// mode
	// When in default mode RunKit Embeds behave like a regular notebook
	// and display outputs after each evaluation. When the Embed is in endpoint mode
	// the outputs are replaced by endpoint logs and a URL is provided to run the Embed
	// code. See https://runkit.com/docs/endpoint. Defaults to "default"
	getMode: () => Promise<"endpoint" | "default">
	setMode: (mode: "endpoint" | "default") => Promise<undefined>
	
	// nodeVersion
	// A semver range that the node engine should satisfy, e.g.
	// "4.0.x" or "> 6.9.2". Defaults to "10.x.x"
	getNodeVersion: () => Promise<semverRange>
	setNodeVersion: (nodeVersion: semverRange) => Promise<undefined>
	
	// source
	getSource: () => Promise<string> // The source code of the Embed.
	setSource: (source: string) => Promise<undefined>
	
	// packageTimestamp
	// The timestamp in UTC milliseconds to recreate the state
	// of package availability. No packages published to npm after this time are
	// available in this embed. Useful for reproducing bugs, or guaranteeing dependency
	// versions. By default the timestamp is set to the time the embed is created.
	getPackageTimestamp: () => Promise<number | null>
	setPackageTimestamp: (packageTimestamp: number | null) => Promise<undefined>
	
	// preamble
	// Code in the preamble field will not be displayed in the embed,
	// but will be executed before running the code in the embed. For example,
	// libraries that use RunKit for documentation often require their package in the
	// preamble to avoid clutter in the embed code.
	getPreamble: () => Promise<string>
	setPreamble: (preamble: string) => Promise<undefined>
	
	// readOnly
	getReadOnly: () => Promise<boolean> 
	setReadOnly: (readOnly: boolean) => Promise<undefined>
	
	// shareableURL
	// A URL that can be used to share the Embed with other users.
	getShareableURL: () => Promise<string>
	
	// requirePath
	// A path that can be used to require this Embed as a module in
	// other Embeds or RunKit Notebook.
	getRequirePath: () => Promise<string>
	
	// tabSize
	getTabSize: () => Promise<number> // An Integer Minimum of 0 Defaults to 4
	setTabSize: (tabSize: number) => Promise<undefined>
	
	// title
	// The title of the RunKit Notebook when it is saved on RunKit.
	getTitle: () => Promise<string>
	setTitle: (title: string) => Promise<undefined>
}