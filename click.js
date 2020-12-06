function handleClick() {
  const pushObj = {
    body: "こっちはクリックした時出るよ",
    icon: "https://dummyimage.com/600x400/000/fff",
    timeout: 10000,
    onClick: function () {
      const url = "https://google.com";
      window.open(url);
    },
  }
  Push.create("Push通知やで", pushObj)
}
