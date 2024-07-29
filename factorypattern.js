// assume we have two type of employee

const developers = (name) => {
  this.name = name;
  this.type = "Developer";
};
const tester = (name) => {
  this.name = name;
  this.type = "Tester";
};

const employeeFactory = () => {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return developers(name);
      case 2:
        return tester(name);
    }
  };
};

const empFactory = new employeeFactory();
empFactory.create();
