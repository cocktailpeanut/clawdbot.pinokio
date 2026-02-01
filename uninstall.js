module.exports = {
  "run": [
    {
      "method": "shell.run",
      "params": {
        "message": "openclaw uninstall --all --yes"
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": "npm uninstall -g openclaw"
      }
    }
  ]
}
