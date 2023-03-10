<div id="modal_launch" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title">Record </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                
                
                    {!! Form::open(['class' =>'user', 'id' => 'launch_form']) !!}

                        <div class="modal-body">

            
                            <!-- Imputs hidden -->
                            @include('templates.forms.input',['input' => 'text','value' => '0', 'class' => 'd-none', 'attributes' => [ 'name' => 'id', 'hidden', 'id' => 'id']])
                            
                            @include('templates.forms.input',['input' => 'text','value' => '$id_user', 'class' => 'd-none', 'attributes' => [ 'name' => 'id_user', 'hidden', 'id' => 'id_user']])

                            @include('templates.forms.input',['input' => 'text','value' => $operation, 'class' => 'd-none', 'attributes' => [ 'name' => 'idtb_operation', 'hidden', 'id' => 'idtb_operation']])

                            @include('templates.forms.input',['input' => 'text','value' => $type_launch, 'class' => 'd-none', 'attributes' => [ 'name' => 'idtb_type_launch', 'hidden', 'id' => 'idtb_type_launch']])

                            @include('templates.forms.input',['input' => 'text','value' => $base, 'class' => 'd-none', 'attributes' => [ 'name' => 'idtb_base', 'hidden', 'id' => 'idtb_base']])

                            @include('templates.forms.input',['input' => 'text','value' => $base, 'class' => 'd-none', 'attributes' => [ 'name' => 'id_filial', 'hidden', 'id' => 'id_filial']])

                            @include('templates.forms.input',['input' => 'text','value' => $status, 'class' => 'd-none', 'attributes' => [ 'name' => 'status', 'hidden', 'id' => 'status']])

                            
                            <!-- \ Imputs hidden -->

                            @include('templates.forms.input',['input' => 'text','label' => 'Name ', 'attributes' => ['placeholder' => 'Name','class' => 'form-control form-control-user ui-widget ', 'id' => 'name', 'name' => 'name',  'maxlength' => '100']])

                            @include('templates.forms.number',['input' => 'number', 'label' => 'Value', 'attributes' => ['placeholder' => 'Value', 'class' => 'form-control form-control-user', 'id' => 'value', 'name' => 'value',  'maxlength' => '100', 'step' => '0.01']])

                            @include('templates.forms.textarea',['input' => 'textarea','label' => 'Description', 'attributes' => ['placeholder' =>'Description','class' => 'form-control form-control-user ui-widget ', 'id' => 'description', 'name' => 'description',  'maxlength' => '255', 'style' => 'resize:none']])

                            @include('templates.forms.select',['select' => 'Caixa', 'label' => 'Box', 'data' => $caixa_list, 'attributes' => ['class' => 'form-control form-control-user', 'id' => 'idtb_caixa', 'name' => 'idtb_caixa']])

                            @include('templates.forms.select',['select' => 'tpPayment', 'label' => 'Payment type', 'data' => $payment_type ,'attributes' => ['placeholder' => 'Payment type', 'class' => 'form-control form-control-user', 'id' => 'idtb_payment_type', 'name' => 'idtb_payment_type']])

                            @include('templates.forms.select',['select' => 'mes', 'label' => 'Time Period', 'data' => $month ,'attributes' => ['placeholder' => 'Time period', 'class' => 'form-control form-control-user', 'id' => 'idtb_closing', 'name' => 'idtb_closing']])
                            
                            @include('templates.forms.date',['date' => 'date', 'label' => 'Date of collection','attributes' => ['placeholder' => 'Date of Collection', 'class' => 'form-control form-control-user col-lg-5', 'id' => 'operation_date', 'name' => 'operation_date']])
                            
                                

                        </div>
                         <div class="modal-footer">
                
                            @include('templates.forms.button',['input' => '<i class="fa fa-save fa-fw"></i> Record','attributes' => ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'btn_save_launch']])
                            @include('templates.forms.button',['input' => '<i class="fas fa-times fa-fw"></i> close','attributes' => ['type' => 'button', 'class' => 'btn btn-secondary', 'data-dismiss' => 'modal']])
                            
                            <!--<button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                        </div>
           

                    {!! Form::close() !!}
            </div>
        </div>
    </div>