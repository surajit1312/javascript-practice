const Singleton = (function () {
  let pManager = null;
  function ProcessManager() {
    this.instance = 1;
  }
  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }
  return {
    getProcessManager: function () {
      if (!pManager) {
        pManager = createProcessManager();
      }
      return pManager;
    },
  };
})();

const process1 = Singleton.getProcessManager();
const process2 = Singleton.getProcessManager();

console.log("process1 === process2 :", process1 === process2);
