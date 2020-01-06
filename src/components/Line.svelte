<style>
  .line {
    left: 50%;
  }
  .line::after {
    animation: run 9s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    background: linear-gradient(
      to bottom,
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 1) 75%,
      hsla(0, 0%, 100%, 1) 100%
    );
    content: "";
    display: block;
    height: 10vh;
    left: 0;
    position: absolute;
    width: 100%;
    top: -50%;
  }
  .line:nth-child(1) {
    margin-left: -45%;
  }
  .line:nth-child(1)::after {
    animation-delay: 1.5s;
  }
  .line:nth-child(2) {
    margin-left: -40%;
  }
  .line:nth-child(3) {
    margin-left: 40%;
  }
  .line:nth-child(3)::after {
    animation-delay: 2.5s;
  }

  @keyframes run {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }
</style>

<div class="line absolute top-0 w-px h-full bg-transparent overflow-hidden" />
