<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Atomic Web: CSS Animations & JS Functions</title>
    <meta name="description" content="A demonstration of CSS3 transitions, keyframe animations, and JavaScript functions including scope, parameters, and return values, all infused with the power of I AM ATOMIC.">
    <meta name="keywords" content="HTML5, CSS3, Animations, Transitions, JavaScript, Functions, Scope, Parameters, Return Values, DOM, I AM ATOMIC">
    <link rel="canonical" href="https://www.example.com/atomic-animated-web.html">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header: The declaration of presence with an atomic background -->
    <header class="main-header">
        <h1>I AM ATOMIC!</h1>
        <p>Witness dynamic power through CSS animations and JavaScript functions.</p>
    </header>

    <!-- Main Content: Demonstrating CSS Animations and JavaScript Logic -->
    <main class="main-content">

        <!-- Section 1: Shadow Garden Application (Custom Form Validation - Interactive Feature 1) -->
        <section id="shadow-garden-application" class="content-section">
            <h2>Shadow Garden Application</h2>
            <p>Prove your worth. Fill out the application with precise and accurate intel.</p>

            <!-- novalidate attribute disables browser's default HTML5 validation -->
            <form id="applicationForm" class="application-form" novalidate>
                <div class="form-group">
                    <label for="applicantName">Codename:</label>
                    <input type="text" id="applicantName" name="applicantName" placeholder="Your Shadow Operative Name" required>
                    <span class="error-message" id="nameError"></span>
                </div>

                <div class="form-group">
                    <label for="applicantEmail">Encrypted Email:</label>
                    <input type="email" id="applicantEmail" name="applicantEmail" placeholder="your.secure@shadow.org" required>
                    <span class="error-message" id="emailError"></span>
                </div>

                <div class="form-group">
                    <label for="secretCode">Secret Activation Code:</label>
                    <input type="password" id="secretCode" name="secretCode" minlength="8" required>
                    <span class="error-message" id="codeError"></span>
                </div>

                <div class="form-group">
                    <label for="motivation">Motivation (Why join Shadow Garden?):</label>
                    <textarea id="motivation" name="motivation" rows="5" placeholder="Elaborate on your atomic ambitions..." required></textarea>
                    <span class="error-message" id="motivationError"></span>
                </div>

                <button type="submit" class="atomic-button form-submit-button">Submit Application</button>
            </form>
        </section>

        <!-- Section 2: Atomic Message Transformer (Interactive Feature 2) -->
        <section id="message-transformer" class="content-section">
            <h2>Atomic Message Transformer</h2>
            <p>Enter any text, and watch it transform into an unreadable, yet profoundly atomic, cipher.</p>

            <div class="message-controls">
                <label for="inputMessage">Original Message:</label>
                <textarea id="inputMessage" rows="4" placeholder="Type your secret message here..."></textarea>
                <button id="transformMessageBtn" class="atomic-button">Transform Message</button>
            </div>

            <p class="transformed-message-display">Transformed Message: <span id="transformedOutput"></span></p>
        </section>

        <!-- Section 3: Shadow Intelligence Panel (CSS Transition with JS Toggle) -->
        <section id="intel-panel-section" class="content-section">
            <h2>Shadow Intelligence Briefing</h2>
            <p>Access classified intel. Toggle the panel to reveal hidden information.</p>
            <button id="toggleIntelPanelBtn" class="atomic-button">Toggle Intel Panel</button>
            <div id="intelPanel" class="intel-panel">
                <h3>Incoming Transmission...</h3>
                <p>The threads of fate are intertwining. A new threat emerges from the shadows, requiring atomic countermeasures. Prepare for deployment.</p>
                <p>Mission critical: Maintain anonymity. The world must never know the true power of Shadow Garden.</p>
            </div>
        </section>

        <!-- Section: The Ultimate Revelation (I AM ATOMIC Media - at the end) -->
        <section id="ultimate-revelation" class="media-section content-section">
            <h2>The Ultimate Revelation</h2>
            <p>Witness the embodiment of precision, control, and absolute power.</p>

            <figure class="media-figure">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7ZLS5KNDelI" title="YouTube video player for I AM ATOMIC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>The moment of ultimate declaration.</figcaption>
            </figure>

            <figure class="media-figure">
                <img src="https://i.ytimg.com/vi/na7TkyIk6B8/maxresdefault.jpg" alt="Cid Kagenou from The Eminence in Shadow posing dramatically with a powerful aura, related to the I AM ATOMIC meme." width="560">
                <figcaption>A visual of the atomic essence.</figcaption>
            </figure>
        </section>

    </main>

    <!-- Footer: The persistent echo of power -->
    <footer class="main-footer">
        <p>&copy; 2025 Shadow Garden HTML & CSS & JS. All Rights Reserved. The atomic echo resonates.</p>
    </footer>

    <!-- Link to our JavaScript file - defer for faster page load -->
    <script src="script.js" defer></script>

</body>
</html>
