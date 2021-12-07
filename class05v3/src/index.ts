function promptUser(): void {
    console.clear();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        badProperty: true
    }).then(answers => {
        // no action required
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    })
}