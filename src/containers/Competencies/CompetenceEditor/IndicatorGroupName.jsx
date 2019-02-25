import React from 'react'

const IndicatorGroupName = props => {
    const {
        id,
        name, 
        setActiveGroup,
    } = props;

    return (
        <div class="card-header">
            <h5 class="mb-0">
                <button 
                    class="btn btn-link" 
                    onClick={() => setActiveGroup(id)} 
                    type="button" 
                    data-toggle="collapse" 
                    aria-expanded="true">
                        {name}
                </button>
            </h5>
        </div>
    );
}

export default IndicatorGroupName;