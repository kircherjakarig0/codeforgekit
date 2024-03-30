// Create a class named CodeForgeKit
class CodeForgeKit {
    constructor() {
        this.tools = [];
    }

    // Method: add a tool to the kit
    addTool(tool) {
        this.tools.push(tool);
        console.log(`Added ${tool} to the CodeForgeKit.`);
    }

    // Method: remove a tool from the kit
    removeTool(tool) {
        const index = this.tools.indexOf(tool);
        if (index !== -1) {
            this.tools.splice(index, 1);
            console.log(`Removed ${tool} from the CodeForgeKit.`);
        } else {
            console.log(`${tool} is not found in the CodeForgeKit.`);
        }
    }

    // Method: list all tools in the kit
    listTools() {
        console.log("Tools in the CodeForgeKit:");
        this.tools.forEach(tool => {
            console.log(tool);
        });
    }
}

// Create an instance of CodeForgeKit named myCodeForgeKit
const myCodeForgeKit = new CodeForgeKit();

// Add tools to the kit
myCodeForgeKit.addTool("IDE");
myCodeForgeKit.addTool("Debugger");
myCodeForgeKit.addTool("Version Control");

// List all tools in the kit
myCodeForgeKit.listTools();

// Remove a tool from the kit
myCodeForgeKit.removeTool("IDE");

// List all tools in the kit after removal
myCodeForgeKit.listTools();
