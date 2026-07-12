/**
 * Renders the site from window.PORTFOLIO (see data.js).
 * Each renderer targets an element by id and is a no-op if that element
 * isn't on the current page, so this one file serves both pages.
 */
(function () {
  var data = window.PORTFOLIO;
  if (!data) return;

  function linkList(links) {
    return links
      .map(function (l) {
        return (
          '<a href="' + l.href + '" target="_blank" rel="noreferrer">' + l.label + "</a>"
        );
      })
      .join("");
  }

  function roleSpan(role) {
    return role ? ' <span class="role">· ' + role + "</span>" : "";
  }

  function projectEntry(p) {
    return (
      '<article class="entry">' +
      '<div class="entry-head">' +
      "<h3>" + p.name + "</h3>" +
      '<span class="links">' + linkList(p.links) + "</span>" +
      "</div>" +
      '<p class="tech">' + p.tech + "</p>" +
      '<p class="desc">' + p.desc + "</p>" +
      "</article>"
    );
  }

  function experienceEntry(e) {
    return (
      '<article class="entry">' +
      '<div class="entry-head">' +
      "<h3>" + e.name + roleSpan(e.role) + "</h3>" +
      '<span class="when">' + e.when + "</span>" +
      "</div>" +
      '<p class="tech">' + e.tech + "</p>" +
      "<ul>" +
      e.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") +
      "</ul>" +
      "</article>"
    );
  }

  function noteEntry(n) {
    return (
      '<article class="entry">' +
      '<div class="entry-head">' +
      "<h3>" + n.title + roleSpan(n.role) + "</h3>" +
      "</div>" +
      '<p class="desc">' + n.desc + "</p>" +
      "</article>"
    );
  }

  function set(id, html) {
    var node = document.getElementById(id);
    if (node) node.innerHTML = html;
  }

  function moreLink(link) {
    return (
      '<p class="more-link"><a href="' + link.href +
      '" target="_blank" rel="noreferrer">' + link.label + "</a></p>"
    );
  }

  // Intro (home page)
  var profile = data.profile;
  set(
    "intro",
    "<h1>" + profile.name + "</h1>" +
      '<p class="role">' + profile.role + "</p>" +
      profile.intro.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      '<div class="intro-links">' + linkList(profile.links) + "</div>"
  );

  // Experience (home page)
  set(
    "experience-list",
    data.experience.map(experienceEntry).join("") + moreLink(data.experienceMore)
  );

  // Featured projects (home page)
  set(
    "projects-list",
    data.featuredProjects.map(projectEntry).join("") +
      '<p class="more-link"><a href="projects.html">More projects →</a></p>'
  );

  // Recognitions (home page)
  set("recognitions-list", data.recognitions.map(noteEntry).join(""));

  // Open source & talks (home page)
  set("opensource-list", data.openSource.map(noteEntry).join(""));

  // Contact (home page)
  set(
    "contact-body",
    "<p>" + data.contact.text + "</p>" +
      '<p class="email"><a href="mailto:' + profile.email + '">' + profile.email + "</a></p>" +
      '<div class="contact-links">' + linkList(profile.links) + "</div>"
  );

  // Archived projects (projects page)
  set(
    "more-projects-list",
    data.moreProjects.map(projectEntry).join("") + moreLink(data.moreProjectsLink)
  );

  // Footer (both pages)
  var footers = document.querySelectorAll("[data-footer]");
  footers.forEach(function (f) { f.textContent = data.footer; });
})();
