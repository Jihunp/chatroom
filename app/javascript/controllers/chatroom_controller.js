import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "chatbox"]

  connect() {
    console.log("connected let's kick some ass")
  }

  send() {
    this.chatboxTarget.innerHTML += `<div>${this.inputTarget.value}</div>`
    this.inputTarget.value
  }
}
