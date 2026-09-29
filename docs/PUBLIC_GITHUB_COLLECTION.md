# Public GitHub collection policy

[English](PUBLIC_GITHUB_COLLECTION.md) · [简体中文](PUBLIC_GITHUB_COLLECTION.zh-CN.md)

The encyclopedia accepts TapeOut-related repositories that can be verified from a clean, anonymous
environment. Never run discovery with an account that can see private repositories.

## Verification gate

1. Add the canonical `owner/repository` name and public URL to
   `content/public-github/repositories.json`.
2. Remove `GH_TOKEN`, `GITHUB_TOKEN`, and `GITHUB_PAT` from the environment.
3. Run `npm run verify:public-github`.
4. Confirm the GitHub API returns the exact canonical name, `private: false`, and `visibility: public`.
5. Confirm `git ls-remote` succeeds with an empty temporary home and no Git credential configuration.
6. Review the summary and category by hand before opening a pull request.

The verifier is read-only and never discovers repositories. It checks only the explicit public list.
It exits immediately when GitHub credentials are present.

## Submission rules

- Cite only public URLs that work without authentication.
- Do not copy repository lists, names, descriptions, commit messages, issue text, or metadata from a
  private account view.
- Keep `official` for repositories owned by the `TapeOutProtocol` organization. Label all other entries
  `community` unless a future policy adds another reviewed category.
- A failed or ambiguous check blocks publication until a human resolves it.
