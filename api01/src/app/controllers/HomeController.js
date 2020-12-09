class HomeController {
  async index(req, res) {
    let data = [
      { name: "bulbasaur", experience: 64 },
      { name: "ivysaur", experience: 142 },
      { name: "charmander", experience: 62 },
      { name: "sandshrew", experience: 60 },
      { name: "persian", experience: 158 },
    ];

    res.render("home/index", {
      data: data,
    });
  }
}

export default new HomeController();
