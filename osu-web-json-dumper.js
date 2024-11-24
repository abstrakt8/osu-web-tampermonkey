// ==UserScript==
// @name         osu! Score Page JSON Dumper
// @namespace    https://osu.ppy.sh/
// @version      1.0
// @description  Parse and display JSON data from osu! score pages
// @author       You
// @match        https://osu.ppy.sh/scores/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Function to prettify and display JSON data
    const displayJSON = (json) => {
        const prettifiedJSON = JSON.stringify(json, null, 4); // Prettify JSON with indentation
        console.log("Prettified JSON:", prettifiedJSON);

        // Create a display container for the JSON
        const container = document.createElement("div");
        container.style.position = "fixed";
        container.style.top = "10px";
        container.style.right = "10px";
        container.style.maxWidth = "500px";
        container.style.maxHeight = "90vh";
        container.style.overflow = "auto";
        container.style.zIndex = "10000";
        container.style.backgroundColor = "#2d2d2d"; // Dark background
        container.style.color = "#f8f8f2"; // Light text for contrast
        container.style.border = "1px solid #ccc";
        container.style.padding = "10px";
        container.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
        container.style.fontFamily = "monospace";
        container.style.whiteSpace = "pre-wrap";
        container.style.lineHeight = "1.5"; // Improve readability

        // Add JSON to the container
        container.textContent = prettifiedJSON;

        // Append container to the body
        document.body.appendChild(container);
    };

    // Parse and display the JSON data
    const parseJSON = () => {
        const jsonElement = document.getElementById("json-show");
        if (jsonElement) {
            try {
                const jsonData = JSON.parse(jsonElement.textContent);
                displayJSON(jsonData);
            } catch (error) {
                console.error("Failed to parse JSON:", error);
            }
        } else {
            console.warn("JSON element with id 'json-show' not found.");
        }
    };

    // Wait for the DOM to fully load
    window.addEventListener("load", () => {
        console.log("osu! Score Page Detected");
        parseJSON();
    });
})();

