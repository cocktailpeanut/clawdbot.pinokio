module.exports = {
    daemon: true,
    run: [{
      "method": "shell.run",
      "params": {
        "message": [
          "openclaw gateway run"
        ],
        "on": [{
          "event": "/listening on.*ws:\\/\\/([0-9.:]+)/",
          "done": true
        }]
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": [
          "openclaw dashboard"
        ],
        "on": [{
          "event": "/http:\\/\\/[^ ]+ /",
          "done": true
        }]
      }
    }]
}
