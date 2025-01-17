import pageCountdownTime from './page-countdown-time.js';
import pageLink from './page-link.js';
import pageSectionTitle from './page-section.js';
import pageTable from './page-table.js';

const hiddenLink = {
    props: {
        now: Object,
        hide: {
            type: Boolean,
            default: null,
        },
        hideUntil: {
            type: Object,
            default: null,
        },
        hidePlaceholder: {
            type: Boolean,
            default: false,
        },
        name: String,
        href: String,
    },
    components: {
        'page-link': pageLink,
    },
    computed: {
        willHide: function () {
            if (this.hide === null) {
                return (
                    this.hide ||
                    this.hideUntil === null ||
                    this.hideUntil.isAfter(this.now)
                );
            } else {
                return this.hide;
            }
        },
        content: function () {
            return this.hidePlaceholder ? '' : this.name;
        },
    },
    template: `
        <span v-if="willHide">{{content}}</span>
        <page-link
          v-else
          :href="href"
          :text="name">
        </page-link>
    `,
};

const homeworkAssignment = {
    props: {
        name: String,
        handoutURL: String,
        out: String,
        due: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        }
        else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(18);
                timeObj.minute(0);
            } else {
                timeObj = moment(timeStr, [
                    'MM/DD HH:mm',
                    'MM/DD hh:mm a',
                    'MM/DD hh a',
                    'YYYY/MM/DD HH:mm',
                    'YYYY/MM/DD hh:mm a',
                    'YYYY/MM/DD hh a',
                ]);
            }
            return timeObj;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
        </tr>
    `,
};

const labAssignment = {
    props: {
        name: String,
        slidesName: String,
        handoutURL: String,
        out: String,
        now: Object,
        slidesURL: String
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        }
        else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(18);
                timeObj.minute(0);
            } else {
                timeObj = moment(timeStr, [
                    'MM/DD HH:mm',
                    'MM/DD hh:mm a',
                    'MM/DD hh a',
                    'YYYY/MM/DD HH:mm',
                    'YYYY/MM/DD hh:mm a',
                    'YYYY/MM/DD hh a',
                ]);
            }
            return timeObj;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <th scope="row">
                <hidden-link
                  :name="slidesName"
                  :href="slidesURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
        </tr>
    `,
};

const projectAssignment = {
    props: {
        name: String,
        handoutURL: String,
        out: String,
        due: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        }
        else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(18);
                timeObj.minute(0);
            } else {
                timeObj = moment(timeStr, [
                    'MM/DD HH:mm',
                    'MM/DD hh:mm a',
                    'MM/DD hh a',
                    'YYYY/MM/DD HH:mm',
                    'YYYY/MM/DD hh:mm a',
                    'YYYY/MM/DD hh a',
                ]);
            }
            return timeObj;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
        </tr>
    `,
};

const examAssignment = {
    props: {
        name: String,
        handoutURL: String,
        out: String,
        due: String,
        now: Object,
    },
    components: {
        'hidden-link': hiddenLink,
        'page-countdown-time': pageCountdownTime,
        'page-link': pageLink,
    },
    data: function () {
        if (this.due == '') {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.due,
            };
        }
        else {
            return {
                outMoment: this.parseTime(this.out),
                dueMoment: this.parseTime(this.due),
            };
        }
    },
    methods: {
        parseTime: function (timeStr) {
            let timeObj = moment(timeStr, ['MM/DD', 'YYYY/MM/DD'], true);
            if (timeObj.isValid()) {
                timeObj.hour(18);
                timeObj.minute(0);
            } else {
                timeObj = moment(timeStr, [
                    'MM/DD HH:mm',
                    'MM/DD hh:mm a',
                    'MM/DD hh a',
                    'YYYY/MM/DD HH:mm',
                    'YYYY/MM/DD hh:mm a',
                    'YYYY/MM/DD hh a',
                ]);
            }
            return timeObj;
        },
    },
    template: `
        <tr>
            <th scope="row">
                <hidden-link
                  :name="name"
                  :href="handoutURL"
                  :hide-until="outMoment"
                  :now="now"
                >
                </hidden-link>
            </th>
            <td>
                <page-countdown-time
                  name="out"
                  :time="outMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
            <td>
                <page-countdown-time
                  name="due"
                  :time="dueMoment"
                  :now="now"
                >
                </page-countdown-time>
            </td>
        </tr>
    `,
};

Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'homework-assignment': homeworkAssignment,
        'lab-assignment': labAssignment,
        'project-assignment': projectAssignment,
        'exam-assignment': examAssignment,
        'page-table': pageTable,
        'page-section-title': pageSectionTitle,
    },
    data: function () {
        return {
            homeworkAssignments: [
                {
                    name: 'Self-Guided Practice (Optional)',
                    handoutURL: '',
                    out: '01/20',
                    due: '01/22 11:59PM',
                },
                {
                    name: 'Classes and Methods',
                    handoutURL: '',
                    out: '01/22',
                    due: '01/29 11:59PM',
                },
                {
                    name: 'Interfaces, Lists, and Testing for Mutation',
                    handoutURL: '',
                    out: '01/29',
                    due: '02/05 11:59PM',
                },
                {
                    name: 'Doubly-Linked Lists',
                    handoutURL: '',
                    out: '02/05',
                    due: '02/12 11:59PM',
                },
                {
                    name: 'Hashtables; Iterator',
                    handoutURL: '',
                    out: '02/26',
                    due: '03/08 11:59PM',
                },
                {
                    name: 'Scala',
                    handoutURL: '',
                    out: '03/08',
                    due: '03/15 11:59PM',
                },
                {
                    name: 'Dynamic Programming; SRC',
                    handoutURL: '',
                    out: '03/26',
                    due: '04/02 11:59PM',
                },
            ],
            labAssignments: [
                {
                    name: 'Intellij/Scala Tester Setup Help',
                    handoutURL: '',
                    out: '01/20',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Object-Oriented Design; Icebreakers',
                    handoutURL: '',
                    out: '01/27',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'For-While Loops; Orcale',
                    handoutURL: '',
                    out: '02/3',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Debugging',
                    handoutURL: '',
                    out: '02/10',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'I/O with CSV Parsing; Exceptions',
                    handoutURL: '',
                    out: '02/17',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Regular Expressions',
                    handoutURL: '',
                    out: '02/24',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Sorting/Reduce Time-Space',
                    handoutURL: '',
                    out: '03/03',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Scala var/val, Exceptions',
                    handoutURL: '',
                    out: '03/10',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Understanding PageRank',
                    handoutURL: '',
                    out: '03/17',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Dynamic Programming',
                    handoutURL: '',
                    out: '03/24',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Understanding Dijkstra; Implementing Heaps',
                    handoutURL: '',
                    out: '03/31',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
                {
                    name: 'Garbage Collection',
                    handoutURL: '',
                    out: '04/07',
                    slidesName: 'Slides',
                    slidesURL: ''
                },
            ],
            projectAssignments: [
                {
                    name: 'Recommender',
                    handoutURL: '',
                    out: '02/12',
                    due: '02/26 11:59PM',
                },
                {
                    name: 'Search',
                    handoutURL: '',
                    out: '03/12',
                    due: '03/26 11:59PM',
                },
                {
                    name: 'Model Checking',
                    handoutURL: '',
                    out: '04/02',
                    due: '04/16 11:59PM',
                },
            ],
            examAssignments: [
                {
                    name: 'Midterm',
                    handoutURL: '',
                    out: '03/01',
                    due: '03/05 11:59PM',
                },
                {
                    name: 'Final',
                    handoutURL: '',
                    out: '04/23',
                    due: '',
                },
            ],
            now: moment(),
            tableheads: ['assignment', 'out', 'due',],
            labsTableheads: ['assignment', 'out', 'slides',],
        };
    },
    created: function () {
        setInterval(() => (this.now = moment()), 1000);
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
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="Homeworks"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>
                        Homeworks are due on the Due Date at Anywhere-On-Earth time. They can be submitted on Gradescope [TODO: Link here].
                    </p>
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <homework-assignment
                          v-for="(assignment, index) of homeworkAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </homework-assignment>
                    </page-table>
                </div>
            </section>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="Labs"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>
                        There are 12 labs. Labs are synchronized and held virtually. See the calendar for a list of lab times. If you need to reschedule your lab time, please see the course missive.
                    </p>
                    <page-table
                      :tableheads="labsTableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <lab-assignment
                          v-for="(assignment, index) of labAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </lab-assignment>
                    </page-table>
                </div>
            </section>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="Projects"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>There will be two projects (and one mini-project) this semester. Projects are submitted through gradescope [TODO: link gradescope here]</p>
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <project-assignment
                          v-for="(assignment, index) of projectAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </project-assignment>
                    </page-table>
                </div>
            </section>
            <section class="container-fluid d-flex flex-wrap flex-column my-5 px-0 px-sm-5">
                <page-section-title
                  :icon-classes="curPageIconClasses"
                  text="Exams"
                  :style-object="{'color': curPageThemeColor}"
                  :text-style-object="{'border-bottom': 'solid thick'}"
                ></page-section-title>
                <div
                  class="mx-4 mx-sm-5 px-0 px-lg-5"
                  :style="{ color: curPageThemeColor}"
                >
                    <p>[TODO: A blurb about exams.]</p>
                    <page-table
                      :tableheads="tableheads"
                      tableheadBackground="rgba(111, 82, 142, 0.2)"
                      :style="{ color: curPageThemeColor}"
                    >
                        <exam-assignment
                          v-for="(assignment, index) of examAssignments"
                          :key="index"
                          v-bind="assignment"
                          :now="now"
                        >
                        </exam-assignment>
                    </page-table>
                </div>
            </section>
        </main>
    `,
});
