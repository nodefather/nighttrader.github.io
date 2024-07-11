(function ($) {
    "use strict";

    // Default Settings
    var settings = {
        theme: "light", // or "dark"
        layout: "vertical", // or "horizontal"
        sidebarStyle: "full", // or "compact" or "icon-hover"
        sidebarPosition: "fixed", // or "static"
        headerPosition: "fixed", // or "static"
        containerLayout: "full", // or "boxed"
        direction: "ltr" // or "rtl"
    };

    // Save Settings to Local Storage
    function saveSettings() {
        localStorage.setItem("quixlab-settings", JSON.stringify(settings));
    }

    // Load Settings from Local Storage
    function loadSettings() {
        var savedSettings = localStorage.getItem("quixlab-settings");
        if (savedSettings) {
            settings = JSON.parse(savedSettings);
            applySettings();
        }
    }

    // Apply Settings
    function applySettings() {
        // Theme
        if (settings.theme === "dark") {
            $("body").addClass("dark-theme");
        } else {
            $("body").removeClass("dark-theme");
        }

        // Layout
        if (settings.layout === "horizontal") {
            $("#main-wrapper").addClass("horizontal");
        } else {
            $("#main-wrapper").removeClass("horizontal");
        }

        // Sidebar Style
        $("#main-wrapper").removeClass("full compact icon-hover").addClass(settings.sidebarStyle);

        // Sidebar Position
        if (settings.sidebarPosition === "static") {
            $("#main-wrapper").addClass("sidebar-static");
        } else {
            $("#main-wrapper").removeClass("sidebar-static");
        }

        // Header Position
        if (settings.headerPosition === "static") {
            $("#main-wrapper").addClass("header-static");
        } else {
            $("#main-wrapper").removeClass("header-static");
        }

        // Container Layout
        if (settings.containerLayout === "boxed") {
            $("#main-wrapper").addClass("container-boxed");
        } else {
            $("#main-wrapper").removeClass("container-boxed");
        }

        // Direction
        if (settings.direction === "rtl") {
            $("html").attr("dir", "rtl");
        } else {
            $("html").attr("dir", "ltr");
        }
    }

    // Update Settings
    function updateSettings(newSettings) {
        settings = Object.assign(settings, newSettings);
        applySettings();
        saveSettings();
    }

    // Event Listeners for Settings Changes
    $(".theme-toggle").on("click", function () {
        var newTheme = settings.theme === "light" ? "dark" : "light";
        updateSettings({ theme: newTheme });
    });

    $(".layout-toggle").on("click", function () {
        var newLayout = settings.layout === "vertical" ? "horizontal" : "vertical";
        updateSettings({ layout: newLayout });
    });

    $(".sidebar-style-toggle").on("click", function () {
        var newStyle = $(this).data("style");
        updateSettings({ sidebarStyle: newStyle });
    });

    $(".sidebar-position-toggle").on("click", function () {
        var newPosition = settings.sidebarPosition === "fixed" ? "static" : "fixed";
        updateSettings({ sidebarPosition: newPosition });
    });

    $(".header-position-toggle").on("click", function () {
        var newPosition = settings.headerPosition === "fixed" ? "static" : "fixed";
        updateSettings({ headerPosition: newPosition });
    });

    $(".container-layout-toggle").on("click", function () {
        var newLayout = settings.containerLayout === "full" ? "boxed" : "full";
        updateSettings({ containerLayout: newLayout });
    });

    $(".direction-toggle").on("click", function () {
        var newDirection = settings.direction === "ltr" ? "rtl" : "ltr";
        updateSettings({ direction: newDirection });
    });

    // Initialize Settings on Page Load
    loadSettings();

})(jQuery);
