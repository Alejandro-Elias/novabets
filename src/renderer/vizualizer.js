import AudioMotionAnalyzer from "../assets/audioMotion-analyzer-4.5.4/src/audioMotion-analyzer.js";

let audioMotion;

export const initVisualizer = () => {
  if (audioMotion) return;

  const audio = document.getElementById("player");
  const container = document.getElementById("visualizer");

  audioMotion = new AudioMotionAnalyzer(container, {
    overlay: true,
    showBgColor: true,
    source: audio,
    bgAlpha: 0.1,
    mode: 3,
    height: 80,
    frequencyScale: "log",
    showPeaks: true,
    barSpace: 0.5,
    gradient: "steelblue",
    howScaleX: false,
    showScaleY: false,   
  });
  audioMotion.showScaleX = false;
};