/* Hidden ORAC Problem Revealer

[Just include as userscript, scroll to the bottom and try ONE of the 2 bottom scripts by uncommenting. If 1 doesn't work, try other one.]

Reveals hidden ORAC Problems and adds them to problem set page (https://orac2.info/hub/personal)
Note that this does not automatically unlock all sets, only some old problems that are non-findable other than brute forcing pages (that's what I did)

It adds
- Graph Theory Training Problems
- Bitmask Training Problems
- C++ Starter Problems
- Various Implementation Training Problems
- ACIO 2019 - 2023 got removed from ORAC :(
*/

const data = {
    "tags": [
        "cpp-practice"
    ],
    "sets": [
        {
            "tag":"training",
            "set_name":"Implementation Problems",
            "set_id":"implementation-problems",
            "problems": [
                {
                    "problem_name":"Bernard's Magic Needles",
                    "problem_link":"https://orac2.info/problem/1106/"
                },
                {
                    "problem_name":"A Not So Simple Sort",
                    "problem_link":"https://orac2.info/problem/1105/"
                },
                {
                    "problem_name":"Pie a la Mode",
                    "problem_link":"https://orac2.info/problem/1111/"
                },
                {
                    "problem_name":"Stacks",
                    "problem_link":"https://orac2.info/problem/745/"
                },
                {
                    "problem_name":"Queues",
                    "problem_link":"https://orac2.info/problem/752/"
                },
                {
                    "problem_name":"Bracket Matching",
                    "problem_link":"https://orac2.info/problem/1107/"
                },
                {
                    "problem_name":"Twin Primes",
                    "problem_link":"https://orac2.info/problem/872/"
                },
                {
                    "problem_name":"Pairs",
                    "problem_link":"https://orac2.info/problem/947/"
                }
            ]
        },
        {
            "tag":"training",
            "set_name":"Graph Problems",
            "set_id":"graph-problems",
            "problems": [
                {
                    "problem_name":"Quicksort",
                    "problem_link":"https://orac2.info/problem/659/"
                },
                {
                    "problem_name":"Gossip Chains",
                    "problem_link":"https://orac2.info/problem/738/"
                },
                {
                    "problem_name":"King Arthur",
                    "problem_link":"https://orac2.info/problem/978/"
                }
            ]
        },
        {
            "tag":"training",
            "set_name":"Bitmask Problems",
            "set_id":"bitmask-problems",
            "problems": [
                {
                    "problem_name":"Tiling",
                    "problem_link":"https://orac2.info/problem/935/"
                },
                {
                    "problem_name":"Odd Jobs",
                    "problem_link":"https://orac2.info/problem/951/"
                },
                {
                    "problem_name":"King Arthur",
                    "problem_link":"https://orac2.info/problem/978/"
                }
            ]
        },
        {
            "tag":"cpp-practice",
            "set_name":"C++ Starter Problems",
            "set_id":"cpp-starter",
            "problems": [
                {
                    "problem_name":"Addition (C++ Only)",
                    "problem_link":"https://orac2.info/problem/1309/"
                },
                {
                    "problem_name":"Counting to Infinity (C++ Only)",
                    "problem_link":"https://orac2.info/problem/1307/"
                },
                {
                    "problem_name":"Triple Hunting (C++ Only)",
                    "problem_link":"https://orac2.info/problem/1306/"
                },
                {
                    "problem_name":"Sitting or Standing (C++ Only)",
                    "problem_link":"https://orac2.info/problem/1308/"
                },
                {
                    "problem_name":"A Dish Best Served Cold (C++ Only)",
                    "problem_link":"https://orac2.info/problem/1310/"
                }
            ]
        }
    ]
}

// Fetching

async function get_text_html(url) {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.text();
}

async function get_html(url) {
    const htmlString = await get_text_html(url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc;
}

async function get_badge(url) {
    const doc = await get_html(url);
    const badge = doc.getElementsByClassName("badge hub-badge")[0];
    if(badge) {
        return badge.cloneNode(true);
    } else {
        const newNode = document.createElement("span");
        newNode.innerText = "Problem does not exist";
        return newNode;
    }
}

async function load_from_data() {
    // Add all of the tags
    add_tags(data.tags);
    // Add all of the sets
    for(let i = 0; i < data.sets.length; i++) {
        add_set(data.sets[i].set_name, data.sets[i].set_id, data.sets[i].tag);
        for(let j = 0; j < data.sets[i].problems.length; j++) {
            await append_set(data.sets[i].set_id, data.sets[i].problems[j].problem_name, data.sets[i].problems[j].problem_link);
        }

        // Add scoring here
        scoring = add_scoring(data.sets[i].set_id);
        score_obtained = scoring[0];
        max_score_possible = scoring[1];
        let score_elem = document.getElementById("custom_set-"+data.sets[i].set_id).children[0].children[0].children[0].children[1].children[0].children[0];
        score_elem.innerText = score_obtained.toString() + " / " + max_score_possible.toString();
        score_elem.className = '';
        score_elem.classList.add("badge");
        score_elem.classList.add("mr-auto");
        if(score_obtained == 0) {
            // Red
            score_elem.classList.add("badge-cmsred");
        } else if(score_obtained == max_score_possible) {
            // Green
            score_elem.classList.add("badge-cmsgreen");
            document.getElementById("custom_set-"+data.sets[i].set_id).classList.add("solved-set");
        } else {
            // Yellow
            score_elem.classList.add("badge-cmsyellow");
        }
    }
}

// Tags
function add_tags(tag_names) {
    const tags_cont = document.getElementsByClassName("tags-container")[0];
    for(let i = 0; i < tag_names.length; i++) {
        const newNode = document.createElement("span");
        newNode.classList.add("badge");
        newNode.classList.add("badge-tag");
        newNode.setAttribute("onclick", "toggleSetTagSelected(this);");
        newNode.innerText = tag_names[i];
        tags_cont.appendChild(newNode);
    }
}

function add_set(set_name, set_id, tag_name) {
    let parentNode = document.getElementById("show-sets");
    let newNode = document.createElement("div");
    newNode.id = "custom_set-"+set_id;
    newNode.classList.add("problemset-display");
    newNode.classList.add("set-table");
    newNode.classList.add("set-tag-"+tag_name);
    newNode.innerHTML = `<table class="table table-sm mt-0 mb-0 pointer" data-toggle="collapse" data-target="#problem-set-`+set_id+`" title="Click to collapse/expand">
  <thead class="thead-dark">
    <tr>
      <th scope="col">
        <span class="set-title mr-auto">`+set_name+`</span>
      </th>
      <th scope="col" class="progress-column">
        <div class="d-flex align-items-center">
          
            <span class="badge badge-cmsyellow mr-auto">Custom Set</span>
          
          
            <span class="fas fa-lg fa-tag" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tags: "></span>
          
        </div>
      </th>
    </tr>
  </thead>
</table>`;
    let problems_table = document.createElement("div");
    problems_table.id = "problem-set-"+set_id;
    problems_table.classList.add("collapse");
    problems_table.classList.add("show");
    problems_table.classList.add("set-problems");
    let table_official = document.createElement("table");
    table_official.classList.add("table");
    table_official.classList.add("table-sm");
    table_official.classList.add("mt-0");
    table_official.classList.add("mb-0");
    let tbody_thing = document.createElement("tbody");
    tbody_thing.id = "custom-set-table-"+set_id;
    table_official.appendChild(tbody_thing);
    problems_table.appendChild(table_official);
    newNode.appendChild(problems_table);
    parentNode.appendChild(newNode);
}

async function append_set(set_id, prob_name, link) {
    // Make big stuff
    let parentNode = document.getElementById("custom-set-table-"+set_id);
    let newNode = document.createElement("tr");
    let nameStuff = document.createElement("td"); nameStuff.setAttribute("scope", "row");
    let scoreStuff = document.createElement("td"); scoreStuff.classList.add("progress-column");
    // Link
    let linkNode = document.createElement("a");
    linkNode.setAttribute("href", link);
    linkNode.innerText = prob_name;
    nameStuff.appendChild(linkNode);
    // Badge
    let badgeNode = await get_badge(link);
    scoreStuff.appendChild(badgeNode);
    // Add together
    newNode.appendChild(nameStuff);
    newNode.appendChild(scoreStuff);
    parentNode.appendChild(newNode);
}

function add_scoring(set_id) {
    const parent = document.getElementById("custom-set-table-"+set_id);
    let total_score = 0;
    let max_score = 0;
    for(let i = 0; i < parent.children.length; i++) {
        total_score += parseInt(parent.children[i].children[1].children[0].innerText);
        if(parseInt(parent.children[i].children[1].children[0].innerText) == 100) {
            // Full solve, add tag
            parent.children[i].className = "solved-problem";
        }
        max_score += 100;
    }
    return [total_score, max_score];
}

/*
document.addEventListener('DOMContentLoaded', function () {
    load_from_data();
});
*/

/*
load_from_data();
*/
