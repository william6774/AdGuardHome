import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Trans, withNamespaces } from 'react-i18next';
import Card from '../ui/Card';
import PageTitle from '../ui/PageTitle';

class CustomRules extends Component {
    handleChange = (e) => {
        const { value } = e.currentTarget;
        this.handleRulesChange(value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleRulesSubmit();
    };

    handleRulesChange = (value) => {
        this.props.handleRulesChange({ userRules: value });
    };

    handleRulesSubmit = () => {
        this.props.setRules(this.props.filtering.userRules);
    };

    render() {
        const { t, filtering: { userRules } } = this.props;
        return (
            <Fragment>
                <PageTitle title={t('custom_rules')} />
                <Card title={t('custom_filter_rules')} subtitle={t('custom_filter_rules_hint')}>
                    <form onSubmit={this.handleSubmit}>
                    <textarea
                        className="form-control form-control--textarea-large"
                        value={userRules}
                        onChange={this.handleChange}
                    />
                        <div className="card-actions">
                            <button
                                className="btn btn-success btn-standard"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                <Trans>apply_btn</Trans>
                            </button>
                        </div>
                    </form>
                    <hr />
                    <div className="list leading-loose">
                        <Trans>examples_title</Trans>:
                        <ol className="leading-loose">
                            <li>
                                <code>||example.org^</code> –&nbsp;
                                <Trans>example_meaning_filter_block</Trans>
                            </li>
                            <li>
                                <code> @@||example.org^</code> –&nbsp;
                                <Trans>example_meaning_filter_whitelist</Trans>
                            </li>
                            <li>
                                <code>127.0.0.1 example.org</code> –&nbsp;
                                <Trans>example_meaning_host_block</Trans>
                            </li>
                            <li>
                                <code><Trans>example_comment</Trans></code> –&nbsp;
                                <Trans>example_comment_meaning</Trans>
                            </li>
                            <li>
                                <code><Trans>example_comment_hash</Trans></code> –&nbsp;
                                <Trans>example_comment_meaning</Trans>
                            </li>
                            <li>
                                <code>/REGEX/</code> –&nbsp;
                                <Trans>example_regex_meaning</Trans>
                            </li>
                        </ol>
                    </div>
                    <p className="mt-1">
                        <Trans
                            components={[
                                <a
                                    href="https://github.com/AdguardTeam/AdGuardHome/wiki/Hosts-Blocklists"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key="0"
                                >
                                    link
                                </a>,
                            ]}
                        >
                            filtering_rules_learn_more
                        </Trans>
                    </p>
                </Card>
            </Fragment>
        );
    }
}

CustomRules.propTypes = {
    handleRulesChange: PropTypes.func.isRequired,
    handleRulesSubmit: PropTypes.func,
    t: PropTypes.func.isRequired,
    setRules: PropTypes.func,
    filtering: PropTypes.shape({
        userRules: PropTypes.string.isRequired,
        filters: PropTypes.array.isRequired,
        isModalOpen: PropTypes.bool.isRequired,
        isFilterAdded: PropTypes.bool.isRequired,
        processingFilters: PropTypes.bool.isRequired,
        processingAddFilter: PropTypes.bool.isRequired,
        processingRefreshFilters: PropTypes.bool.isRequired,
        processingConfigFilter: PropTypes.bool.isRequired,
        processingRemoveFilter: PropTypes.bool.isRequired,
        modalType: PropTypes.string.isRequired,
    }),
};

export default withNamespaces()(CustomRules);
