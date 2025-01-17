import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';

const courseResource = {
    props: {
        title: String,
    },
    template: `
      <div class="d-flex flex-column mb-4" style="color: #266079">
          <h3 class="text-capitalize">{{title}}</h3>
          <slot></slot>
      </div>
    `,
};

const courseDocumentsSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-resource': courseResource,
        'page-link': pageLink,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="course documents"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            ></page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <p>
                    <page-link title="course missive" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/missive.html" text="Course Missive"></page-link>
                </p>
                <p>
                    <page-link title="collaboration policy" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/collaboration.html" text="Collaboration Policy"></page-link>
                </p>
                <p>
                    <page-link title="pair programming guide" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/pair-programming.html" text="Pair Programming Guide"></page-link>
                </p>
                <p>
                    <page-link title="ta hours guide" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/hours-policy.html" text="TA Hours Guide"></page-link>
                </p>
                <p>
                    <page-link title="piazza" href="" text="Piazza [TODO: Link]"></page-link>
                </p>
                <p>
                    <page-link title="good coding practices" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/java-gcp.pdf" text="Good Coding Practices"></page-link>
                </p>
                <p>
                    <page-link title="java style guide" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/java-style.pdf" text="Java Style Guide"></page-link>
                </p>
                <p>
                    <page-link title="additional scala good coding practices" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/scala-gcp.pdf" text="Additional Scala Good Coding Practices"></page-link>
                </p>
                <p>
                    <page-link title="scala style guide" href="https://cs.brown.edu/courses/csci0180/content/docs-spec/scala-style.pdf" text="Scala Style Guide"></page-link>
                </p>
            </div>
        </section>
    `,
};

const helpfulLinksSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-resource': courseResource,
        'page-link': pageLink,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="helpful links"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            ></page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <p>
                    <page-link title="debugging guide" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/missive.html" text="Debugging Guide"></page-link>
                </p>
                <p>
                    <page-link title="lab switch guide" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/labswitches.pdf" text="Lab Switch Guide"></page-link>
                </p>
                <p>
                    <page-link title="javadocs" href="http://docs.oracle.com/javase/8/docs/api/" text="Javadocs"></page-link>
                </p>
                <p>
                    <page-link title="regex guide" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/Regex.pdf" text="Regex Guide"></page-link>
                </p>
                <p>
                    <page-link title="tester documentation" href="http://www.ccs.neu.edu/javalib/Tester/index.html" text="Tester Documentation"></page-link>
                </p>
                <p>
                    <page-link title="scaladocs" href="http://www.scala-lang.org/api/current/index.html" text="Scaladocs"></page-link>
                </p>
            </div>
        </section>
    `,
};

const workingFromHomeSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-resource': courseResource,
        'page-link': pageLink,
        'page-section-title': pageSectionTitle,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="working from home"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            ></page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <p>
                    <page-link title="intellij" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/intellij_setup.html" text="Intellij Setup Guide"></page-link>
                </p>
                <p>
                    <page-link title="work from home windows" href="https://cs.brown.edu/about/system/connecting/ssh/faq/windows/" text="Work From Home (Windows)"></page-link>
                </p>
                <p>
                    <page-link title="work from home mac linux" href="https://cs.brown.edu/about/system/connecting/ssh/osx/" text="Work From Home (MAC OS/Linux)"></page-link>
                </p>
                <p>
                    <page-link title="working with the command line" href="https://cs.brown.edu/courses/csci0180/content/docs-gen/command_line_guide.pdf" text="Working with the Command Line"></page-link>
                </p>
            </div>
        </section>
    `,
};

{
    /* <course-resource title="style guidelines">
                    <p>
                       In addition to being graded on correctness of your solutions, each problem you submit will also receive a style score. You can find rubric and example <page-link title="style guidelines" href="" text="here"></page-link>
                    </p>
                </course-resource> */
}
const externalResourcesSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'course-resource': courseResource,
        'page-link': pageLink,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="external resources"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="Department Resources">
                    <ul>
                        <li><page-link title="ugrad-missive-link" href="http://cs.brown.edu/courses/ta/pubs/ugrad_missive.pdf" text="Undergraduate Missive"></page-link></li>
                        <li><page-link title="di-resource-link" href="http://cs.brown.edu/about/diversity/resources/" text="Diversity and Inclusion"></page-link></li>
                        <li><page-link title="student-di-resource-link" href="https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" text="Student Advocates for Diversity and Inclusion"></page-link></li>
                        <li><page-link title="wics-resource-link" href="https://cs.brown.edu/people/orgs/wics/" text="Women in Computer Science"></page-link></li>
                        <li><page-link title="mosaic-resource-link" href="https://mosaic-plus-brown.github.io/mosaic/" text="MOSAIC+"></page-link></li>
                    </ul>
                </course-resource>
                <course-resource title="Brown CS Health and Wellness">
                    <p>If you need accommodation for your physical and mental health, please feel free to reach out to Professor Fisler - we want to support you as much as we can in the most comfortable way for you. It is important to note that TAs should not be handling health and accomodations information, so inquiries should be directed towards the professors only.</p>
                    <ul>
                        <li>Resources for Physical/Mental Health, Accessibility and Accommodations can be found <page-link title="hw-resource-link" href="https://cs.brown.edu/media/filer_public/03/0a/030a6a2e-7a61-4c30-98c1-dce87b9d9899/brown_cs_health_and_wellness_resources.pdf" text="here"></page-link>.</li>
                    </ul>
                </course-resource>
            </div>
        </section>
    `,
};

const otherSection = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'course-resource': courseResource,
        'page-link': pageLink,
    },
    template: `
        <section class="container-fluid flex-wrap flex-row my-5 px-0 px-sm-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              text="other"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'border-bottom': 'solid thick'}"
            >
            </page-section-title>
            <div
              class="mx-4 mx-sm-5 px-0 px-lg-5 flex-fill d-flex flex-column"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <course-resource title="Image Credits">
                <p>All images are from Pexels. Pexels' license can be found
                    <page-link title="mosaic-resource-link" href="https://www.pexels.com/license/" text="here"></page-link></p>
                </course-resource>
            </div>
        </section>
    `,
};

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'course-documents-section': courseDocumentsSection,
        'external-resources-section': externalResourcesSection,
        'helpful-links-section': helpfulLinksSection,
        'working-from-home-section': workingFromHomeSection,
        'other-section': otherSection,
    },
    mounted: function () {
        const element = this.$el;
        document.addEventListener(
            'DOMContentLoaded',
            function () {
                element.scrollIntoView(true);
                window.scrollBy(0, -150);
            },
            false
        );
    },
    template: `
        <main>
            <course-documents-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </course-documents-section>
            <helpful-links-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </helpful-links-section>
            <working-from-home-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </working-from-home-section>            
            <external-resources-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </external-resources-section>
            <other-section
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
            >
            </other-section>
        </main>
    `,
});
