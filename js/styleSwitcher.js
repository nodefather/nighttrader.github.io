(function ($) {
    "use strict";

    // Theme switcher settings
    var themeSettings = {
        theme: "light", // "light" or "dark"
        sidebarStyle: "full", // "full", "compact", "icon-hover"
        sidebarPosition: "fixed", // "fixed" or "static"
        headerPosition: "fixed", // "fixed" or "static"
        layout: "vertical", // "vertical" or "horizontal"
        containerLayout: "full", // "full" or "boxed"
    };

    // Save theme settings to local storage
    function saveThemeSettings() {
        localStorage.setItem("nighttrader-theme-settings", JSON.stringify(themeSettings));
    }

    // Load theme settings from local storage
    function loadThemeSettings() {
        var savedSettings = localStorage.getItem("nighttrader-theme-settings");
        if (savedSettings) {
            themeSettings = JSON.parse(savedSettings);
            applyThemeSettings();
        }
    }

    // Apply theme settings to the UI
    function applyThemeSettings() {
        // Apply theme
        if (themeSettings.theme === "dark") {
            $("body").addClass("dark-theme");
        } else {
            $("body").removeClass("dark-theme");
        }

        // Apply sidebar style
        $("#main-wrapper").removeClass("full compact icon-hover").addClass(themeSettings.sidebarStyle);

        // Apply sidebar position
        if (themeSettings.sidebarPosition === "static") {
            $("#main-wrapper").addClass("sidebar-static");
        } else {
            $("#main-wrapper").removeClass("sidebar-static");
        }

        // Apply header position
        if (themeSettings.headerPosition === "static") {
            $("#main-wrapper").addClass("header-static");
        } else {
            $("#main-wrapper").removeClass("header-static");
        }

        // Apply layout
        if (themeSettings.layout === "horizontal") {
            $("#main-wrapper").addClass("horizontal");
        } else {
            $("#main-wrapper").removeClass("horizontal");
        }

        // Apply container layout
        if (themeSettings.containerLayout === "boxed") {
            $("#main-wrapper").addClass("container-boxed");
        } else {
            $("#main-wrapper").removeClass("container-boxed");
        }
    }

    // Update theme settings and apply them
    function updateThemeSettings(newSettings) {
        themeSettings = Object.assign(themeSettings, newSettings);
        applyThemeSettings();
        saveThemeSettings();
    }

    // Event listeners for theme settings changes
    $(".theme-toggle").on("click", function () {
        var newTheme = themeSettings.theme === "light" ? "dark" : "light";
        updateThemeSettings({ theme: newTheme });
    });

    $(".sidebar-style-toggle").on("click", function () {
        var newStyle = $(this).data("style");
        updateThemeSettings({ sidebarStyle: newStyle });
    });

    $(".sidebar-position-toggle").on("click", function () {
        var newPosition = themeSettings.sidebarPosition === "fixed" ? "static" : "fixed";
        updateThemeSettings({ sidebarPosition: newPosition });
    });

    $(".header-position-toggle").on("click", function () {
        var newPosition = themeSettings.headerPosition === "fixed" ? "static" : "fixed";
        updateThemeSettings({ headerPosition: newPosition });
    });

    $(".layout-toggle").on("click", function () {
        var newLayout = themeSettings.layout === "vertical" ? "horizontal" : "vertical";
        updateThemeSettings({ layout: newLayout });
    });

    $(".container-layout-toggle").on("click", function () {
        var newLayout = themeSettings.containerLayout === "full" ? "boxed" : "full";
        updateThemeSettings({ containerLayout: newLayout });
    });

    // Initialize theme settings on page load
    loadThemeSettings();

})(jQuery);
