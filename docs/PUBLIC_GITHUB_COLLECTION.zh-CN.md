# 公开 GitHub 仓库收录规则

[English](PUBLIC_GITHUB_COLLECTION.md) · [简体中文](PUBLIC_GITHUB_COLLECTION.zh-CN.md)

百科只收录能够在干净、匿名环境中验证的 TapeOut 相关仓库。禁止使用能够查看私有仓库的账号进行发现或验证。

## 验证门禁

1. 把规范的 `owner/repository` 名称和公开 URL 添加到 `content/public-github/repositories.json`。
2. 从环境中移除 `GH_TOKEN`、`GITHUB_TOKEN` 和 `GITHUB_PAT`。
3. 运行 `npm run verify:public-github`。
4. 确认 GitHub API 返回完全一致的规范名称、`private: false` 和 `visibility: public`。
5. 确认在临时空 HOME、无 Git 凭据配置的环境中，`git ls-remote` 可以成功读取仓库。
6. 提交 Pull Request 前，由人工审阅简介与分类。

校验器是只读工具，不负责搜索或发现仓库。它只检查明确列入公开目录的项目；检测到 GitHub 凭据时会立即退出。

## 提交规则

- 只引用无需登录即可访问的公开 URL。
- 不得从私有仓库视图复制仓库列表、名称、简介、提交信息、Issue 内容或任何元数据。
- `official` 仅用于 `TapeOutProtocol` 组织拥有的仓库。其他项目默认标记为 `community`，除非未来规则增加新的已审阅分类。
- 任何失败或含糊的检查都会阻止发布，直到人工确认。
