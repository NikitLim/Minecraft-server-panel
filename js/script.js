const serverInfo = {
    name: "Survival Server",
    version: "Minecraft Vanilla 1.21.3",
    status: "Online",
    players: 12,
    maxPlayers: 20,
    CPU: "24%",
    RAM: "2 GB",
    maxRAM: "8 GB",
    TPS: "20.0"
}

const stopButton = document.getElementById("stopButton");
const startButton = document.getElementById("startButton");
const playerCount = document.getElementById("playerCount");
const cpuUsage = document.getElementById("cpuUsage");
const ramIsage = document.getElementById("ramUsage");
const tpsValue = document.getElementById("tpsValue");
const serverStatus = document.querySelector(".main_panel_text_status-active");
const playerProgressBar = document.getElementById("playerProgressBar");
const cpuProgressBar = document.getElementById("cpuProgressBar");
const ramProgressBar = document.getElementById("ramProgressBar");
const tpsProgressBar = document.getElementById("tpsProgressBar");
const restartButton = document.getElementById("restartButton");

updateServerInfo();
updateProgressBars();

function updateServerInfo() {
    playerCount.textContent = `${serverInfo.players} / ${serverInfo.maxPlayers}`;
    cpuUsage.textContent = serverInfo.CPU;
    ramIsage.textContent = `${serverInfo.RAM} / ${serverInfo.maxRAM}`;
    tpsValue.textContent = serverInfo.TPS;
    serverStatus.textContent = serverInfo.status;
}

function startServer() {
    serverInfo.status = "Online";
    serverInfo.players = 12;
    serverInfo.CPU = "24%";
    serverInfo.RAM = "2 GB";
    serverInfo.TPS = "20.0";
    serverStatus.classList.remove("main_panel_text_status-inactive");
    serverStatus.classList.add("main_panel_text_status-active");
}

function stopServer() {
    serverInfo.status = "Offline";
    serverInfo.players = 0;
    serverInfo.CPU = "0%";
    serverInfo.RAM = "0 GB";
    serverInfo.TPS = "0.0";
    serverStatus.classList.remove("main_panel_text_status-active");
    serverStatus.classList.add("main_panel_text_status-inactive");
}

function updateProgressBars() {
    playerProgressBar.style.width = `${(serverInfo.players / serverInfo.maxPlayers) * 100}%`;
    cpuProgressBar.style.width = serverInfo.CPU;
    ramProgressBar.style.width = `${(parseFloat(serverInfo.RAM) / parseFloat(serverInfo.maxRAM)) * 100}%`;
    tpsProgressBar.style.width = `${(parseFloat(serverInfo.TPS) / 20.0) * 100}%`;
}ЁЁЁ

startButton.addEventListener("click", function() {
    startServer();
    updateProgressBars();
    updateServerInfo();
});

stopButton.addEventListener("click", function() {
    stopServer();
    updateProgressBars();
    updateServerInfo();
});

restartButton.addEventListener("click", function() {
    if(serverInfo.status === "Online") {
        stopServer();
        updateProgressBars();
        updateServerInfo();

        startServer();
        updateProgressBars();
        updateServerInfo();
        serverInfo.players = 0;
        updateServerInfo();
        updateProgressBars();
    }
});
