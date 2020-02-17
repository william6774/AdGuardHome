import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces, Trans } from 'react-i18next';

const Actions = ({ handleAdd, handleRefresh, processingRefreshFilters }) => (
    <div className="card-actions">
        <button
            className="btn btn-success btn-standard mr-2 btn-large"
            type="submit"
            onClick={handleAdd}
        >
            <Trans>add_filter_btn</Trans>
        </button>
        <button
            className="btn btn-primary btn-standard"
            type="submit"
            onClick={handleRefresh}
            disabled={processingRefreshFilters}
        >
            <Trans>check_updates_btn</Trans>
        </button>
    </div>
);

Actions.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    handleRefresh: PropTypes.func.isRequired,
    processingRefreshFilters: PropTypes.bool.isRequired,
};

export default withNamespaces()(Actions);

