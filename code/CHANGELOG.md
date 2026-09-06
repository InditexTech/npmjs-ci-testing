# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Grant `contents: read` to the Scorecard analysis job's permissions so `actions/checkout` can fetch the repository
- Grant `issues: read` and `pull-requests: read` to the Scorecard analysis job's permissions. `ossf/scorecard-action@f49aabe0b5af0936a0987cfb85d86b75731b0186` (v2.4.1, pinned) forwards the job's default `GITHUB_TOKEN` to `ossf/scorecard@v5.1.1`, whose single combined GraphQL query (`clients/githubrepo/graphql.go`, backing both `ListCommits()` and `ListIssues()`) reads `repository.object.history.nodes.associatedPullRequests` (with nested `reviews`/`labels`) and `repository.issues` (with nested `comments`) in one request. With only `contents: read` + `id-token: write` at job level, GitHub rejected that query with `Resource not accessible by integration`; the two added scopes are the minimal set the pinned source requires

## [3.8.0] - 2026-09-04

### Fixed

- chore: remove drifted managed files so governance can materialize the golden workflows

## [3.7.0] - 2026-09-02

### Changed

- chore: validate refined workflow 2
- chore: exercise PR-scoped snapshot publish lane

## [3.6.0] - 2026-03-12

### Changed

- chore: validate refined workflow

## [3.5.0] - 2026-03-12

### Changed

- Pre-seed GPG passphrase for all keygrips (primary + subkeys)

## [3.4.0] - 2026-03-12

### Changed

- Update GPG signing identity to srvcosoitxtech
- Add pinentry-mode loopback for non-interactive GPG signing in CI

## [3.3.0] - 2026-03-11

### Changed

- Use verified GPG committer email for signed commits and tags
- Enable GPG signing for release commits and tags

## [3.2.0] - 2026-03-11

### Changed

- Enable GPG signing for commits and tags in release workfl

## [3.1.0] - 2026-03-11

### Changed

- Enable GPG signing for commits and tags in release workflow

## [3.0.0] - 2026-03-11

## [2.0.2] - 2026-03-11

### Fixed

- Update lock file to use npmjs.org registry

## [2.0.1] - 2026-03-11

### Fixed

- Fix dependencies and versions

## [2.0.0] - 2026-03-11

### Changed

- Major version bump

## [1.0.0] - 2025-01-01

### Added

- Initial release

[Unreleased]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.8.0...HEAD

[3.8.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.7.0...3.8.0

[3.7.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.6.0...3.7.0

[3.6.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.5.0...3.6.0

[3.5.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.4.0...3.5.0

[3.4.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.3.0...3.4.0

[3.3.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.2.0...3.3.0

[3.2.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.1.0...3.2.0

[3.1.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/3.0.0...3.1.0

[3.0.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/2.0.2...3.0.0

[2.0.2]: https://github.com/InditexTech/npmjs-ci-testing/compare/2.0.1...2.0.2

[2.0.1]: https://github.com/InditexTech/npmjs-ci-testing/compare/2.0.0...2.0.1

[2.0.0]: https://github.com/InditexTech/npmjs-ci-testing/compare/1.0.0...2.0.0

[1.0.0]: https://github.com/InditexTech/npmjs-ci-testing/releases/tag/1.0.0
