const eventData = require("./events.json");
const fs = require("fs");

const data = {};

eventData.forEach((event) => {
  if (!data[event["device_alias"]]) {
    data[event["device_alias"]] = [event];
  } else {
    data[event["device_alias"]].push(event);
  }
  delete event["device_alias"];
});

for (key in data) {
  data[key] = data[key].sort((a, b) => {
    // sort by newest to oldest
    return new Date(b["event_timestamp"]) - new Date(a["event_timestamp"]);
  });
}

fs.writeFileSync("event_by_device.json", JSON.stringify(data));
// {
//   "device_name": [
//     { "event_timestamp": "**NEWEST**"},
//     { "event_timestamp": "**OLD**"},
//     { "event_timestamp": "**OLDEST**"},
//   ]
// }
