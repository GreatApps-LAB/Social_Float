const floatBtn = document.querySelector(".float");

function pulseAnimation() {
  const animation = floatBtn.animate(
    [
      { boxShadow: `0 0 0 0 var(--pulse-color)` },
      { boxShadow: `0 0 0 20px rgba(0, 200, 0, 0)` },
    ],
    {
      duration: 2000,
      easing: "ease-out",
      iterations: Infinity,
    }
  );

  animation.addEventListener("iteration", (event) => {
    if (event.elapsedTime > 0) {
      floatBtn.style.boxShadow = "0 0 0 0 var(--pulse-color)";
    }
  });
}

pulseAnimation();
