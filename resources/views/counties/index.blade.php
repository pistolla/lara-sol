<x-layout bodyClass="g-sidenav-show  bg-gray-200">
    <x-navbars.sidebar activePage='dashboard'></x-navbars.sidebar>
    <div id="main">
        <!-- Navbar -->
        <x-navbars.navs.auth titlePage="Counties"></x-navbars.navs.auth>
        <!-- End Navbar -->
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card my-4">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 class="text-white text-capitalize ps-3">Counties</h6>
                            </div>
                        </div>
                        <div class="card-body px-0 pb-2">
                            <div class="me-3 my-3 text-end" role="group">
                                <a href="{{ route('counties.counties.create') }}" class="btn btn-success" title="Create New Counties">
                                    <span class="glyphicon glyphicon-plus" aria-hidden="true">Create New Counties</span>
                                </a>
                            </div>
                            @if(Session::has('success_message'))
                                <div class="alert alert-success">
                                    <span class="glyphicon glyphicon-ok"></span>
                                    {!! session('success_message') !!}
                        
                                    <button type="button" class="close" data-dismiss="alert" aria-label="close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                        
                                </div>
                            @endif
                            @if(count($countiesObjects) == 0)
                                <div class="container-fluid text-center">
                                    <h4>No Counties Available.</h4>
                                </div>
                            @else
                            <div class="container-fluid">
                                <div class="table-responsive">

                                    <table class="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th>County Name</th>

                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($countiesObjects as $counties)
                                            <tr>
                                                <td>{{ $counties->county_name }}</td>

                                                <td>

                                                    <form method="POST" action="{!! route('counties.counties.destroy', $counties->id) !!}" accept-charset="UTF-8">
                                                    <input name="_method" value="DELETE" type="hidden">
                                                    {{ csrf_field() }}

                                                        <div class="btn-group btn-group-xs pull-right" role="group">
                                                            <a href="{{ route('counties.counties.show', $counties->id ) }}" class="btn btn-info" title="Show Counties">
                                                                <span class="glyphicon glyphicon-open" aria-hidden="true">Show</span>
                                                            </a>
                                                            <a href="{{ route('counties.counties.edit', $counties->id ) }}" class="btn btn-primary" title="Edit Counties">
                                                                <span class="glyphicon glyphicon-pencil" aria-hidden="true">Edit</span>
                                                            </a>

                                                            <button type="submit" class="btn btn-danger" title="Delete Counties" onclick="return confirm(&quot;Click Ok to delete Counties.&quot;)">
                                                                <span class="glyphicon glyphicon-trash" aria-hidden="true">Delete</span>
                                                            </button>
                                                        </div>

                                                    </form>
                                                    
                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <div class="card-footer">
                                {!! $countiesObjects->render() !!}
                            </div>
                            
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-layout>

