// // Your code goes here

let root = document.getElementById('root');

let container = document.createElement('div');
container.classList.add('container');

root.appendChild(container);

let mainTitle = document.createElement('h2'); //main title
mainTitle.innerHTML = 'Most popular tanks';
container.appendChild(mainTitle);



function tankList() {

	let tankWrap = document.createElement('div');
	tankWrap.classList.add('tank-wrap');
	container.appendChild(tankWrap);

	for(let i=0; i < tanks.length; i++) {
		let tankItem = document.createElement('div');
		tankItem.classList.add('tank-item');
		tankWrap.appendChild(tankItem);

		let tankImg = document.createElement('img');
		tankImg.classList.add('tank-img');
		tankImg.src = tanks[i].preview;
		tankItem.appendChild(tankImg);

		let mainTankDetail = document.createElement('div');
		mainTankDetail.classList.add('main-tank-details');
		tankItem.appendChild(mainTankDetail);
		// Tank country flag 
		let tankFlag = document.createElement('img');
    tankFlag.classList.add('class', 'tank-flag');
    mainTankDetail.appendChild(tankFlag);
    tankFlag.src = `images/countries/${tanks[i].country}.png`;
    // Tank level
    let mainTankLevel = document.createElement('p');
    mainTankLevel.classList.add('main-tank-level');
    mainTankDetail.appendChild(mainTankLevel);
    mainTankLevel.innerHTML = tanks[i].level;
    // Tank name
    let mainTankName = document.createElement('p');
    mainTankName.classList.add('main-tank-name');
    mainTankDetail.appendChild(mainTankName);
    mainTankName.innerHTML = tanks[i].model;

    tankItem.onclick = function(){
    	location.hash = tanks[i].model;
    };
	}
	return container.appendChild(tankWrap);
}
container.appendChild(tankList());

function tankDescription(tanks) {
    const details = tanks.details;
    return ` 
    <div class="container">
    	<div class="description-title">
        <img class="detail-flag" src="images/countries/${tanks.country}.png" title="${tanks.country}"/>${tanks.model} (level ${tanks.level})
      </div>
    	<div class="tank-details">

        <div class="left-column">
        	<h2 class="preview">Preview</h2>
          <img class="tank-details-flag" src="${tanks.preview}">
          <a class="back-link" onclick="window.history.go(0);">Back to list view</a>
        </div>
               
        <div class="right-column">
          <h2 class="preTable">Characteristic</h2>
          <table>
            <tr>
              <th>
                Damage
              </th>
              <th>
                ${details.damage}
              </th>
            </tr>
                
            <tr>
              <th>
                Breoning
              </th>
              <th>
                ${details.breoning}
              </th>
            </tr>
                
              <tr>
                <th>
                  Attack speed
                </th>
                <th>
                  ${details.attack_speed}
                </th>
              </tr>
                
              <tr>
                <th>
                  Time of targeting
                </th>
	              <th>
                  ${details.time_of_targeting}
                </th>
              </tr>
                
              <tr>
                <th>
                  Ammunition
                </th>
                <th>
                  ${details.ammunition}
                </th>
	            </tr>
             </table>
            </div>
           </div>
					</div>
        `
}

function tankDetail() {
    let model = location.hash.slice(1);
    tanks.forEach(function(el) {
        if (el.model === model) {
            root.innerHTML = tankDescription(el);
        }
    });
}
window.onhashchange = tankDetail;