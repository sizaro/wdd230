@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Playfair+Display&display=swap');

:root {
    --primary-color: #1d2012;
    --secondary-color: #8eaa46;
    --accent1-color: #b3001b;
    --accent2-color: #3f84c0;
    --accent3-color: #ebedef;

    --heading-font: "Lobster&family";
    --paragraph-font: "Playfair+Display";
    --before-content-mode: "";


    --headline-color-on-white: #1d2012;
    --headline-color-on-color: #ebedef;
    --paragraph-color-on-white: #1d2012;
    --paragraph-color-on-color: #ebedef;
    --paragraph-background-color: #1d2012;
    --nav-link-color: #ebedef;
    --nav-background-color: #3f84c0;
    --nav-hover-link-color: #8eaa46;
    --nav-hover-background-color: #b3001b;

    --base-font-size: 16px;
    --line-height: 1.5;
    --spacing-unit: 8px;
    --padding: var(--spacing-unit);
    --margin: var(--spacing-unit);
    --border-width: 1px;
    --border-radius: 4px;
    --z-index-header: 100;
    --z-index-modal: 200;
    --transition-duration: 0.3s;
    --display-on-items: grid;
    --display-on-content: flex;



}

* body {
    box-sizing: border-box;
}

html {
    background-color: var(--accent3-color);
}

body {
    background-color: var(--headline-color-on-white);
    overflow-x: hidden;
    margin: 0 10px;
}

header {
    position: relative;
    display: var(--display-on-content);
    flex-direction: row;
    color: var(--headline-color-on-color);
    background-color: var(--paragraph-color-on-white);
    margin-bottom: 4px;
}

header nav li:hover {
    text-decoration: underline;
    color: blue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
}


.navigation {
    margin-left: 20spx;
}

nav a {
    color: white;
    text-decoration: none;
}



.zoj {
    margin-top: 2px;
    margin-left: 300px;
    color: white;
    text-align: center;
    width: 500px;
    font-size: larger;

}

.zoj :hover {
    border: 4px solid white;
    padding: 4px;
}

.zoj a {
    text-decoration: none;
}

.event,
.weather,
#advertisement,
.advert,
.advert2,
.advert3,
.advert4 {
    border: 1px solid white;
    background-color: var(--nav-background-color);

}

.promo {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template: 1fr/1fr 1fr 1fr 1fr;
    grid-auto-flow: row;
    gap: 10px;
    margin-top: 10px;


}

.advert {
    grid-column: 1/2;
    grid-row: 1/2;
    width: 100%;
    height: 200px;

}

.advert2 {
    grid-column: 2/3;
    grid-row: 1/2;
    width: 100%;
    height: 200px;
}

.advert3 {
    grid-column: 3/4;
    grid-row: 1/2;
    width: 100%;
    height: 200px;
}

.advert4 {
    grid-column: 4/5;
    grid-row: 1/2;
    width: 100%;
    height: 200px;
}

.container {
    display: grid;
    grid-template: 3fr/3fr;
    grid-auto-flow: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.event {
    grid-column: 1/3;
    grid-row: 1/2;
    height: 100%;
}

.event h2,
h1 {
    margin-left: 10px;
}

.event1 p {
    margin-left: 10px;
}

.weather {
    grid-column: 3/4;
    grid-row: 1/2;
}

#advertisement {
    grid-column: 1/4;
    grid-row: 2/3;
}

.joinButton {
    position: absolute;
    top: 100px;
    left: 300px;
    background-color: var(--accent2-color);
    border-radius: 50px;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;

}

.joinButton a {
    text-decoration: none;
}

.text-overlay::before {
    position: absolute;
    content: "large";
    top: 28px;
    right: 450px;
    width: 100px;
    height: auto;
    padding: 15px;
    font-size: 40px;
    background-color: var(--headline-color-on-white);
    color: var(--accent2-color);
}

h2,
div,
p {
    color: var(--headline-color-on-color);
}

.hero {
    position: relative;
    width: 100%;
    height: 50%;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#logoimg img {
    width: 60px;
    height: auto;
    position: absolute;
    left: 0;
    z-index: 1;
}

#logoimg {
    text-align: justify;
}

.navigation li {
    list-style: none;
    padding-left: 40px;
}

.zoj li {
    margin-left: 40px;
    color: white;
}

.navigation {
    display: flex;
    z-index: -1;
}

footer {
    display: flex;
    text-align: center;
    padding-right: 15px;
    margin-left: 400px;
}

p#lastUpdated {
    margin-left: 10px;

}

#mode {
    position: absolute;
    left: 80rem;
    top: 0.2rem;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: black;

}

@media screen and (min-width:300px) and (max-width:769px) {

    html {
        overflow-x: hidden;
        background-color: white;
        max-width: 100%;

    }

    * body {
        box-sizing: border-box;
        max-width: 100vhs;
    }

    body {
        box-sizing: border-box;
        overflow-x: hidden;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        margin: 0 20px;
        overflow-wrap: wrap;
        padding: 0 10px;
    }

    header {
        position: relative;
        display: block;
        columns: var(--headline-color-on-white);

    }

    .navigation {
        margin-left: 40px;
        display: block;
        z-index: 1;
    }

    header nav li:hover {
        background-color: var(--accent2-color);
    }

    nav a {
        color: white;
        text-decoration: none;
    }

    .zoj {
        margin-top: 2px;
        margin-left: 15px;
        color: white;
        text-align: center;
        width: 400px;
        font-size: larger;

    }

    .zoj :hover {
        border: 4px solid white;
        padding: 4px;
    }

    .zoj a {
        text-decoration: none;
    }

    nav {
        display: none;
    }

    header a::before {
        position: absolute;
        content: "☰";
        text-decoration: none;
        font-size: 30px;
        color: white;
        right: 10px;
        bottom: 40px;
        cursor: pointer;
    }

    header a.show::before {
        position: absolute;
        content: "×";
        text-decoration: none;
        font-size: 50px;
        color: white;
        bottom: 29px;
    }


    header ul.show {
        display: block;
    }


    .navigation li {
        list-style: none;
        padding-left: 4px;
        z-index: 999;
    }

    .hero {
        position: relative;
        width: 100%;
        height: 50%;
    }

    .hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .joinButton {
        position: absolute;
        top: 10px;
        left: 100px;
        background-color: var(--accent2-color);
        border-radius: 10px;
        padding: 2px;
        cursor: pointer;
        width: 80px;
        height: auto;
        text-decoration: none;
        text-align: center;
        padding: 2px;

    }

    .joinButton a {
        text-decoration: none;
    }

    .text-overlay::before {
        position: absolute;
        content: "small";
        top: 10px;
        right: 100px;
        width: 100px;
        height: auto;
        padding: 15px;
        font-size: 40px;
        background-color: var(--headline-color-on-white);
        color: var(--accent2-color);
    }

    .promo {
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
        grid-template: 1fr 1fr 1fr 1fr/1fr;
        gap: 10px;
        margin-top: 10px;


    }

    .advert {
        grid-column: 1/2;
        grid-row: 1/2;
        width: 100%;
        height: 200px;

    }

    .advert2 {
        grid-column: 1/2;
        grid-row: 2/3;
        width: 100%;
        height: 200px;
    }

    .advert3 {
        grid-column: 1/2;
        grid-row: 3/4;
        width: 100%;
        height: 200px;
    }

    .advert4 {
        grid-column: 1/2;
        grid-row: 4/5;
        width: 100%;
        height: 200px;
    }

    .container {
        display: grid;
        grid-template: 1fr 1fr/1fr;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .event {
        grid-column: 1/2;
        grid-row: 1/2;
        height: 100%;
    }

    .weather {
        grid-column: 1/2;
        grid-row: 2/3;
    }

    footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-right: 15px;
        margin-left: 16px;
    }

    p#lastUpdated {
        margin-left: 10px;

    }

    #mode {
        position: absolute;
        left: 530px;
        top: 1.9px;
        margin-left: 10px;
        font-size: 1.5rem;
        cursor: pointer;
        background-color: black;

    }
}

@media screen and (min-width:770px) and (max-width:999px) {

    html {
        overflow-x: hidden;
        background-color: white;
        max-width: 100%;

    }

    * body {
        box-sizing: border-box;
        max-width: 100vh;
    }

    body {
        box-sizing: border-box;
        overflow-x: hidden;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        margin: 0 20px;
        overflow-wrap: wrap;
        padding: 0 10px;
    }

    header {
        position: relative;
        display: block;
        columns: var(--headline-color-on-white);

    }

    .navigation {
        margin-left: 40px;
        display: block;
        z-index: 1;
    }

    header nav li:hover {
        background-color: var(--accent2-color);
    }

    nav a {
        color: white;
        text-decoration: none;
    }

    .zoj {
        margin-top: 2px;
        margin-left: 15px;
        color: white;
        text-align: center;
        width: 400px;
        font-size: larger;

    }

    .zoj :hover {
        border: 4px solid white;
        padding: 4px;
    }

    .zoj a {
        text-decoration: none;
    }

    nav {
        display: none;
    }

    header a::before {
        position: absolute;
        content: "☰";
        text-decoration: none;
        font-size: 30px;
        color: white;
        right: 10px;
        bottom: 40px;
        cursor: pointer;
    }

    header a.show::before {
        position: absolute;
        content: "×";
        text-decoration: none;
        font-size: 50px;
        color: white;
        bottom: 29px;
    }


    header ul.show {
        display: block;
    }


    .navigation li {
        list-style: none;
        padding-left: 4px;
        z-index: 999;
    }

    .hero {
        position: relative;
        width: 100%;
        height: 50%;
    }

    .hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .joinButton {
        position: absolute;
        top: 10px;
        left: 100px;
        background-color: var(--accent2-color);
        border-radius: 10px;
        padding: 2px;
        cursor: pointer;
        width: 80px;
        height: auto;
        text-decoration: none;
        text-align: center;
        padding: 2px;

    }

    .joinButton a {
        text-decoration: none;
    }

    .text-overlay::before {
        position: absolute;
        content: "medium";
        top: 20px;
        right: 250px;
        width: 100px;
        height: auto;
        padding: 15px;
        font-size: 30px;
        background-color: var(--headline-color-on-white);
        color: var(--accent2-color);
    }

    .promo {
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
        grid-template: 1fr 1fr 1fr 1fr/1fr;
        gap: 10px;
        margin-top: 10px;


    }

    .advert {
        grid-column: 1/2;
        grid-row: 1/2;
        width: 100%;
        height: 200px;

    }

    .advert2 {
        grid-column: 1/2;
        grid-row: 2/3;
        width: 100%;
        height: 200px;
    }

    .advert3 {
        grid-column: 1/2;
        grid-row: 3/4;
        width: 100%;
        height: 200px;
    }

    .advert4 {
        grid-column: 1/2;
        grid-row: 4/5;
        width: 100%;
        height: 200px;
    }

    .container {
        display: grid;
        grid-template: 1fr 1fr/1fr;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .event {
        grid-column: 1/2;
        grid-row: 1/2;
        height: 100%;
    }

    .weather {
        grid-column: 1/2;
        grid-row: 2/3;
    }

    footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-right: 15px;
        margin-left: 16px;
    }

    p#lastUpdated {
        margin-left: 10px;

    }

    #mode {
        position: absolute;
        left: 10%;
        top: 1.9rem;
        font-size: 1.5rem;
        cursor: pointer;
        background-color: black;

    }
}