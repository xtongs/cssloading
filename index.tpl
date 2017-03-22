<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CSSloadingg Demo | Pure CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="format-detection" content="telephone=no">
</head>
<body>
  <style>
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Courier New, Courier, monospace;
    }

    body * {
      box-sizing: inherit;
    }

    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      text-align: center;
    }

    header h1 {
      display: inline-block;
      margin: 0;
      padding: 20px 0 0;
      width: 100%;
      font-size: 20px;
      color: #333;
      background: -webkit-linear-gradient(white, rgba(255, 255, 255, 0));
      background: -o-linear-gradient(white, rgba(255, 255, 255, 0));
      background: linear-gradient(white, rgba(255, 255, 255, 0));
      z-index: 1;
    }

    header small {
      display: block;
      color: #666;
      font-size: 14px;
    }

    header a {
      display: inline-block;
      color: #999;
      font-size: 14px;
    }

    section {
      min-height: 100vh;
      padding: 100px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h2 {
      color: #666;
      font-size: 16px;
      font-weight: normal;
    }

    div[class^="cssloading"] {
      margin: 10px auto;
    }

    .loadings {
      padding: 0 20px;
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-content: center;
      flex-wrap: wrap;
    }

    .loadings li {
      width: 120px;
      padding: 10px;
      overflow: hidden;
      text-align: center;
    }

    .loadings li p {
      color: #999;
      font-size: 12px;
      display: block;
    }

    .loadings li:nth-of-type(1) div[class^="cssloading"] {
      margin: 16px auto;
    }
  </style>
  <header>
    <h1>CSSloading Demo | Pure CSS</h1>
    <small>Simple div & Customizable</small>
    <a href="//github.com/xtongs/cssloading">Github</a>
  </header>
  <section>
    <h2>.cssloading-circle</h2>
    <ul class="loadings">
      <li>
        <div class="cssloading-circle" style="width: 20px; height: 20px;"></div>
        <p>width: 20px; height: 20px</p>
      </li>
      <li>
        <div class="cssloading-circle" style="color: lightgreen"></div>
        <p>color: lightgreen</p>
      </li>
      <li style="background: #eee;">
        <div class="cssloading-circle" style="background: #eee"></div>
        <p>background: #eee</p>
      </li>
      <li>
        <div class="cssloading-circle" style="font-size: 1px"></div>
        <p>font-size: 1px</p>
      </li>
      <li>
        <div class="cssloading-circle" style="animation-duration: 2s"></div>
        <p>animation-duration: 2s</p>
      </li>
    </ul>
    <h2>.cssloading-ios</h2>
    <ul class="loadings">
      <li>
        <div class="cssloading-ios" style=""><i></i><i></i></div>
        <p>default</p>
      </li>
    </ul>
  </section>
</body>
</html>