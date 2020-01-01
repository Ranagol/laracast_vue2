//tabs is the parent Vue component, tab is the child Vue component.
Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,//above, inside tabs template we have a bulma tab template. This is the template for the tabs
    //isActive will give an 'active' look to the selected tab
    //into the tabs we have to put in dynamically the tabs. So we use v-for. Because our 3 tab components are somehow in some array?
    // the children tab content will come here: <slot></slot>
    //:class="{ 'is-active': tab.isActive } ----> bind the class to is-active if the tab is selected (isActive)
    //... @click="selectTab(tab)">{{ tab.name }}</a>-----> when we click, this will select a new tab and it will pass thorugh the current tab (whatever the fuck this means). selectTab() is a method
    //

    data() {//data in a component must be a function
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;//this allows as to target every tab we have created
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {//goes through all our children tab, and for each tab update its isActive property to false, or true if the current tab is = to the clicked
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }
});

//tab is the child component
Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,//here we have the template for the tab child component
    //only show the <slot></slot> if the isActive true.

    props: {//When a value is passed to a prop attribute, it becomes a property. Props is defining a list what this component can accept. 

        name: { required: true },//here we are accepting the name of the tab from the html (name="..."). required: true means: we must receive a tab name.

        selected: { default: false }//selected means which tab was selected, which tab should have the 'active' look. If there is no additional data, selected will be false.
    },

    data() {
        return {
            isActive: false
        };
    },

    //in the url section, we want to see 'about us' if we are on the about us tab. This part is about that.
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    //this.name.toLowerCase()-----> we want About Our Culture to be about our culture in the url, 
    //replace(/ /g, '-')---->and we want to replace all the spaces between the words with '-', so in the end we get this about-our-culture. g here means look for spaces globally (more than once).
    },

    mounted() {
        this.isActive = this.selected;
    },
});

new Vue({
    el: '#root'
});
