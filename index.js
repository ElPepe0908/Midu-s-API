const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bc7631622amshe4ce671bd4342e8p19a558jsn729252f3fc32",
    "X-RapidAPI-Host": "ip-reputation-geoip-and-detect-vpn.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`,
    OPTIONS
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

console.log("fetchInfo", fetchIpInfo);

const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $input;
  console.log("value", value);
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
