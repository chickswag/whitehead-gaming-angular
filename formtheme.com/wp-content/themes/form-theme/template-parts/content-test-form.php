<?php
?>
<div class="row">
    <div class="container form-wrapper p-4 border-dark" >
        <form method="post" enctype="multipart/form-data" id="form" action="/">
            <div id="results"></div>
            <div class="col form-heading">
                <h3 class="title">Form Theme WP Test</h3>
            </div>
            <div class=" container form-body">
                <div class="">
                    <label class="field-label" for="input-1">Input 1</label>
                    <input class="form-control required" name="input-1" id="input-1" type="text" value="" aria-invalid="false">
                </div>
                <div>
                    <label class="field-label" for="input-2">Input 2</label>
                    <input class="form-control required" name="input-2" id="input-2" type="text" value="" aria-invalid="false">
                </div>
                <div>
                </div>
                <div>
                    <label class="field-label" for="input-3">Input 3</label>
                    <input class="form-control required" name="input-3" id="input-3" type="text" value="" aria-invalid="false">
                </div>
            </div>

            <div class="col form-footer">
                <input type="button"
                       id="form-submit-button"
                       class="button form-control btn btn-success"
                       value="Submit"
                       onclick="testForm()" />
            </div>


        </form>
    </div>
</div>
