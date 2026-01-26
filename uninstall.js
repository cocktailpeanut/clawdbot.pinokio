module.exports = {
  "run": [
    {
      "method": "shell.run",
      "params": {
        "message": "clawdbot uninstall --all --yes"
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": "npm uninstall -g clawdbot"
      }
    }
  ]
}
