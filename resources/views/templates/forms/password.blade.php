<div class="col-lg-12 {{$class ?? null}}">
    <label class ="col l4 control-label">{{$label ?? null}}</label>
        <div class="form-group"> 
            {!! Form::password($input, $attributes) !!}
        </div>
        <span class="help-block"></span>
</div>
