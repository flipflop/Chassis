<!-- begin current categories -->
<!-- Accessibility: can have backend appended titles on current category links -->
<!-- category lists are name agnostic to cater for category name changes -->
<!-- spans are used to place text on a new line "display:block" -->
<!-- additional divs are used to provide CSS hooks to cater for extensible design -->
<!-- use contextual style on parent container to create selected category e.g. .cat-1 .c-1 { ... }  -->
<div id="categories" role="navigation" data-component-name="category-nav">
	<ul>
		<li class="c-1 first-child"><!-- comprises of header menu and content menu -->
			<div class="h-menu"><a href="#"><span>Category 1</span></a></div>
			<div class="c-menu">
				<ul class="col-1"> 
					<li><a href="#"><span>Sub Category 1</span></a></li> 
					<li><a href="#"><span>Sub Category 2</span></a></li> 
					<li><a href="#"><span>Sub Category 3</span></a></li> 
	            </ul>
				<ul class="col-2"> 
					<li><a href="#"><span>Sub Category 4</span></a></li> 
					<li><a href="#"><span>Sub Category 5</span></a></li> 
					<li><a href="#"><span>Sub Category 6</span></a></li> 
	            </ul>
			</div>
		</li>
		<li class="c-2">
			<div class="h-menu"><a href="#"><span>Category 2</span></a></div>
			<div class="c-menu">
				<ul class="col-1"> 
					<li><a href="#"><span>Sub Category 1</span></a></li> 
					<li><a href="#"><span>Sub Category 2</span></a></li> 
					<li><a href="#"><span>Sub Category 3</span></a></li> 
	            </ul>
				<ul class="col-2"> 
					<li><a href="#"><span>Sub Category 4</span></a></li> 
					<li><a href="#"><span>Sub Category 5</span></a></li> 
					<li><a href="#"><span>Sub Category 6</span></a></li> 
	            </ul>
			</div>
		</li>
		<li class="c-3">
			<div class="h-menu"><a href="#"><span>Category 3</span></a></div>
			<div class="c-menu">
				<ul class="col-1"> 
					<li><a href="#"><span>Sub Category 1</span></a></li> 
					<li><a href="#"><span>Sub Category 2</span></a></li> 
					<li><a href="#"><span>Sub Category 3</span></a></li> 
	            </ul>
				<ul class="col-2"> 
					<li><a href="#"><span>Sub Category 4</span></a></li> 
					<li><a href="#"><span>Sub Category 5</span></a></li> 
					<li><a href="#"><span>Sub Category 6</span></a></li> 
	            </ul>
			</div>
		</li>
		<li class="c-4 last-child">
			<div class="h-menu"><a href="#"><span>Category 4</span></a></div>
			<div class="c-menu">
				<ul class="col-1"> 
					<li><a href="#"><span>Sub Category 1</span></a></li> 
					<li><a href="#"><span>Sub Category 2</span></a></li> 
					<li><a href="#"><span>Sub Category 3</span></a></li> 
	            </ul>
				<ul class="col-2"> 
					<li><a href="#"><span>Sub Category 4</span></a></li> 
					<li><a href="#"><span>Sub Category 5</span></a></li> 
					<li><a href="#"><span>Sub Category 6</span></a></li> 
	            </ul>
			</div>
		</li>
	</ul>
	<!-- this component can be placed outside this container if required by design -->
	<?php include("../chassis/templates/components/select-country.php"); ?>
	
</div><!-- id="categories" -->