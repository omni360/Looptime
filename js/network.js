var MAX_QUEUE_LENGTH = 20 //TODO: figure out if this is a good limit

function Network(url) {
  if (!url)
    return //if this.queue isn't initialized all network functions are no-ops

  this.queue = []
  //TODO: set up websocket and stuff
}

Network.prototype.onAddedLocalEvent = function(event) {
  if (!this.queue)
    return

  this.queue.push(event)

  if (this.queue.length < MAX_QUEUE_LENGTH && event.type === "mousemove")
    return

  //TODO: send all events in queue
}