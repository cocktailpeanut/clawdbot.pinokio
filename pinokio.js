module.exports = {
  version: "5.0",
  menu: async (kernel, info) => {
    let running = info.running("start.js")
    let local = info.local("start.js")
    let url = local && local.url
    let items = [{
      icon: "fa-solid fa-plug",
      text: "Install",
      href: "install.json",
    }, {
      icon: "fa-solid fa-circle-play",
      text: "Start",
      href: "start.js",
      default: running && !url
    }, {
      icon: "fa-solid fa-arrows-rotate",
      text: "Update",
      href: "update.js",
    }, {
      icon: "fa-regular fa-trash-can",
      text: "Uninstall",
      href: "uninstall.js",
    }]
    if (url) {
      items.push({
        icon: "fa-solid fa-rocket",
        text: "Open Web UI",
        href: url,
        target: "_blank",
        default: true
      })
    }
    return items
  }
}
