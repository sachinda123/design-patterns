const singalton = () => {
  let pManager;
  const processManager = () => {};
  const createProcessManager = () => {
    pManager = new processManager();
  };

  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = createProcessManager();
      }
      return pManager;
    },
  };
};

const singalton1 = new singalton();
const singalton2 = new singalton();
