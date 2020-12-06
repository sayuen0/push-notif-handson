function main() {
  const pushObj = {
    body: "本文だよここに表示されるよ",
    icon: "https://dummyimage.com/600x400/000/fff",
    timeout: 10000,
    onClick: function () {
      const url = "https://nicovideo.jp";
      window.open(url);
    },
  }
  Push.create("Push通知やで", pushObj)
}
