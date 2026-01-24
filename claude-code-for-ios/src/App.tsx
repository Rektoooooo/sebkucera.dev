import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import CodeBlock from './components/CodeBlock';
import TerminalWindow from './components/TerminalWindow';
import SkillCard from './components/SkillCard';
import Footer from './components/Footer';
import {
  claudeMdExample,
  planMdExample,
  skillsList,
  xcodeMcpConfig,
  githubMcpConfig,
  commitCommand,
  reviewCommand,
  workflowSteps,
  tips,
  gettingStartedSteps,
  prerequisites,
  customCommandExample,
  troubleshootingItems,
  resources
} from './content/sections';

const BASE_URL = import.meta.env.BASE_URL;

function App() {
  const categories = [...new Set(skillsList.map(s => s.category))];
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const toggleSkill = (skillName: string) => {
    console.log('Toggling skill:', skillName);
    setExpandedSkills(prev => {
      const newState = {
        ...prev,
        [skillName]: !prev[skillName]
      };
      console.log('New state:', newState);
      return newState;
    });
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />

      {/* Getting Started Section */}
      <Section
        id="getting-started"
        title="Getting Started"
        subtitle="Set up Claude Code for iOS development"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {prerequisites.map((item, index) => (
            <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <i className="bi bi-check-circle text-green-500"></i>
                <span className="text-text-primary font-mono text-sm">{item.name}</span>
              </div>
              <p className="text-text-muted text-xs">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {gettingStartedSteps.map((item) => (
            <div key={item.step} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-text-primary font-semibold mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm mb-2">{item.description}</p>
                  <code className="text-green-500 text-sm font-mono">{item.command}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <TerminalWindow title="verification">
          <div className="space-y-1">
            <div className="text-text-muted"># Check Claude Code version</div>
            <div>
              <span className="text-green-500">$</span>
              <span className="text-text-primary ml-2">claude --version</span>
            </div>
            <div className="text-orange mt-2">Claude Code v1.x.x</div>
            <div className="text-green-500 mt-2">
              <i className="bi bi-check-lg mr-2"></i>Ready to build iOS apps!
            </div>
          </div>
        </TerminalWindow>
      </Section>

      {/* CLAUDE.md Section */}
      <Section
        id="claude-md"
        title="CLAUDE.md Setup"
        subtitle="The foundation of every Claude Code project"
      >
        <p className="text-text-muted">
          CLAUDE.md is a markdown file at your project root that gives Claude context about your codebase.
          Here's a real example from <a href="https://github.com/Rektoooooo/MealPrepAI" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">MealPrepAI</a>.
        </p>

        <CodeBlock
          code={claudeMdExample}
          language="markdown"
          filename="CLAUDE.md (from MealPrepAI)"
          showLineNumbers={false}
        />

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <h4 className="text-orange font-mono mb-2 flex items-center gap-2">
            <i className="bi bi-star"></i>
            Best Practices
          </h4>
          <ul className="space-y-2 text-text-muted text-sm">
            <li className="flex items-center gap-2"><i className="bi bi-hammer text-orange"></i>Include build commands so Claude can verify code compiles</li>
            <li className="flex items-center gap-2"><i className="bi bi-diagram-3 text-orange"></i>Document your architecture and data model relationships</li>
            <li className="flex items-center gap-2"><i className="bi bi-lightning text-orange"></i>Specify which skills to use (ios-developer, etc.)</li>
            <li className="flex items-center gap-2"><i className="bi bi-arrow-repeat text-orange"></i>Update "Current Focus" as you work on different features</li>
          </ul>
        </div>

        <a
          href={`${BASE_URL}examples/CLAUDE-MealPrepAI.md`}
          download
          className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors font-mono text-sm"
        >
          <i className="bi bi-download"></i> Download full CLAUDE.md example
        </a>
      </Section>

      {/* Plan Mode Section */}
      <Section
        id="plan-mode"
        title="Plan Mode"
        subtitle="Design before you build"
      >
        <p className="text-text-muted">
          Plan Mode is one of Claude Code's most powerful features. Before writing code, Claude analyzes your
          requirements and creates a detailed implementation plan. This prevents wasted effort and ensures alignment.
        </p>

        <TerminalWindow title="entering plan mode">
          <div className="space-y-2">
            <div>
              <span className="text-green-500">$</span>
              <span className="text-text-primary ml-2">claude</span>
              <span className="text-green-500 ml-2">"Plan the meal plan generation feature"</span>
            </div>
            <div className="text-text-muted mt-2">
              Claude enters plan mode automatically for complex tasks...
            </div>
            <div className="text-purple-500 mt-2">
              📋 Plan Mode Active
            </div>
          </div>
        </TerminalWindow>

        <CodeBlock
          code={planMdExample}
          language="markdown"
          filename="PLAN.md (from MealPrepAI)"
          showLineNumbers={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-question-circle"></i>
              When to Use Plan Mode
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-plus-circle text-purple-500"></i>New feature implementation</li>
              <li className="flex items-center gap-2"><i className="bi bi-building text-purple-500"></i>Architectural decisions</li>
              <li className="flex items-center gap-2"><i className="bi bi-files text-purple-500"></i>Multi-file refactoring</li>
              <li className="flex items-center gap-2"><i className="bi bi-database text-purple-500"></i>Complex data model changes</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-check-circle"></i>
              Plan Mode Benefits
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-bug text-green-500"></i>Catches issues before coding</li>
              <li className="flex items-center gap-2"><i className="bi bi-journal-text text-green-500"></i>Documents decisions for future</li>
              <li className="flex items-center gap-2"><i className="bi bi-list-ol text-green-500"></i>Breaks work into phases</li>
              <li className="flex items-center gap-2"><i className="bi bi-people text-green-500"></i>Aligns on approach upfront</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`${BASE_URL}examples/PLAN-MealPrepAI.md`}
            download
            className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors font-mono text-sm"
          >
            <i className="bi bi-download"></i> Download PLAN.md
          </a>
          <a
            href={`${BASE_URL}examples/DESIGN_PLAN-MealPrepAI.md`}
            download
            className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors font-mono text-sm"
          >
            <i className="bi bi-download"></i> Download DESIGN_PLAN.md
          </a>
        </div>
      </Section>

      {/* iOS Developer Skills Section */}
      <Section
        id="skills"
        title="iOS Developer Skills"
        subtitle="28 specialized skills for every iOS development task"
      >
        <p className="text-text-muted">
          The <span className="text-orange font-mono">ios-developer</span> skill is a hub that routes to specialized skills.
          Each skill has deep knowledge of its domain. Click to expand and see details.
        </p>

        {/* Download All Button */}
        <a
          href={`${BASE_URL}ios-skills-pack.zip`}
          download
          className="inline-flex items-center gap-3 px-6 py-3 bg-[rgb(217,145,120)] text-[rgb(10,10,10)] font-mono font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <i className="bi bi-download"></i>
          <span>Download All 28 Skills (.zip)</span>
        </a>

        <div className="space-y-6">
          {categories.map(category => (
            <div key={category}>
              <h4 className="text-purple-500 font-mono mb-3">{category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-start">
                {skillsList.filter(s => s.category === category).map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    description={skill.description}
                    downloadUrl={`${BASE_URL}skills/${skill.name}/SKILL.md`}
                    isExpanded={expandedSkills[skill.name] === true}
                    onToggle={() => toggleSkill(skill.name)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4 mt-6">
          <h4 className="text-orange font-mono mb-2 flex items-center gap-2">
            <i className="bi bi-folder-symlink"></i>
            Installation
          </h4>
          <p className="text-text-muted text-sm mb-2">
            Extract and place skill folders in <span className="text-blue-500 font-mono">~/.claude/skills/</span>
          </p>
          <code className="text-green-500 text-sm font-mono flex items-center gap-2">
            <i className="bi bi-file-earmark-code"></i>
            ~/.claude/skills/ios-developer/SKILL.md
          </code>
        </div>
      </Section>

      {/* Xcode MCP Section */}
      <Section
        id="xcode-mcp"
        title="Xcode MCP"
        subtitle="Direct integration with Xcode for building and testing"
      >
        <p className="text-text-muted">
          The Model Context Protocol (MCP) allows Claude to interact with external tools.
          The Xcode MCP server lets Claude build your project, run tests, and catch errors.
        </p>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4 mb-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-download"></i>
            Step-by-Step Installation
          </h4>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">1</div>
              <div className="flex-1">
                <p className="text-text-primary text-sm font-medium">Open Terminal</p>
                <p className="text-text-muted text-xs">Press <span className="text-orange font-mono">Cmd + Space</span>, type "Terminal", and press Enter</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">2</div>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary text-sm font-medium">Run the install command</p>
                <p className="text-text-muted text-xs mb-2">Copy and paste this into Terminal:</p>
                <div className="bg-bg-primary rounded-lg border border-white/5 flex items-start">
                  <code className="text-green-500 text-xs sm:text-sm font-mono block break-all p-3 flex-1">
                    npx -y @smithery/cli@latest install cameroncooke/xcodebuildmcp --client claude-code
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('npx -y @smithery/cli@latest install cameroncooke/xcodebuildmcp --client claude-code');
                    }}
                    className="p-3 text-text-muted hover:text-orange transition-colors border-l border-white/5"
                    title="Copy to clipboard"
                  >
                    <i className="bi bi-clipboard"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">3</div>
              <div className="flex-1">
                <p className="text-text-primary text-sm font-medium">Restart Claude Code</p>
                <p className="text-text-muted text-xs">Close and reopen Claude Code to load the new MCP server</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">
                <i className="bi bi-check text-xs"></i>
              </div>
              <div className="flex-1">
                <p className="text-text-primary text-sm font-medium">Verify it works</p>
                <p className="text-text-muted text-xs mb-2">In Claude Code, ask:</p>
                <div className="bg-bg-primary rounded-lg p-2 border border-white/5">
                  <code className="text-green-500 text-xs font-mono">"What MCP tools do you have available?"</code>
                </div>
                <p className="text-text-muted text-xs mt-2">You should see <span className="text-orange font-mono">xcode_build</span>, <span className="text-orange font-mono">xcode_test</span>, etc.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-4">
            <a
              href="https://smithery.ai/server/cameroncooke/xcodebuildmcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors text-sm"
            >
              <i className="bi bi-box-seam"></i>
              View on Smithery
              <i className="bi bi-arrow-up-right text-xs"></i>
            </a>
            <a
              href="https://github.com/cameroncooke/XcodeBuildMCP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors text-sm"
            >
              <i className="bi bi-github"></i>
              GitHub
              <i className="bi bi-arrow-up-right text-xs"></i>
            </a>
          </div>
        </div>

        <CodeBlock
          code={xcodeMcpConfig}
          language="json"
          filename="~/.claude/settings.json"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-hammer"></i>
              Capabilities
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li className="flex items-center gap-2">
                <i className="bi bi-play-circle text-green-500"></i>
                <span className="text-green-500">xcode_build</span> - Build and get errors
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-check2-square text-green-500"></i>
                <span className="text-green-500">xcode_test</span> - Run unit/UI tests
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-trash text-green-500"></i>
                <span className="text-green-500">xcode_clean</span> - Clean build folder
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-list-ul text-green-500"></i>
                <span className="text-green-500">xcode_schemes</span> - List schemes
              </li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-lightbulb"></i>
              Pro Tips
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li>• Include build command in CLAUDE.md</li>
              <li>• Claude auto-fixes build errors</li>
              <li>• Tests run on simulator</li>
              <li>• Clean build if caching issues</li>
            </ul>
          </div>
        </div>

        <TerminalWindow title="workflow">
          <div className="space-y-1">
            <div className="text-text-muted"># Claude writes code, then verifies:</div>
            <div>
              <span className="text-orange"><i className="bi bi-hammer mr-2"></i>Building project...</span>
            </div>
            <div className="text-green-500"><i className="bi bi-check-lg mr-2"></i>Build succeeded</div>
            <div className="text-text-muted"># If errors, Claude fixes them automatically</div>
          </div>
        </TerminalWindow>
      </Section>

      {/* GitHub MCP Section */}
      <Section
        id="github-mcp"
        title="GitHub MCP"
        subtitle="Manage PRs, issues, and repos from the terminal"
      >
        <p className="text-text-muted">
          Connect Claude to GitHub for seamless version control integration.
          Create PRs, review code, and manage issues without leaving the terminal.
        </p>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4 mb-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-download"></i>
            Step-by-Step Installation
          </h4>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">1</div>
              <div className="flex-1">
                <p className="text-text-primary text-sm font-medium">Generate a GitHub Personal Access Token</p>
                <p className="text-text-muted text-xs mb-2">Create a new fine-grained token with repository access</p>
                <a
                  href="https://github.com/settings/personal-access-tokens/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors text-xs"
                >
                  <i className="bi bi-github"></i>
                  Create New Token
                  <i className="bi bi-arrow-up-right text-xs"></i>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">2</div>
              <div className="flex-1">
                <p className="text-text-primary text-sm font-medium">Copy your token</p>
                <p className="text-text-muted text-xs">Click "Generate token" and copy it (starts with <span className="text-orange font-mono">github_pat_</span>)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">3</div>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary text-sm font-medium">Run the install command</p>
                <p className="text-text-muted text-xs mb-2">In Terminal, run (replace YOUR_GITHUB_PAT with your token):</p>
                <div className="bg-bg-primary rounded-lg border border-white/5 flex items-start">
                  <code className="text-green-500 text-xs font-mono block break-all p-3 flex-1">
                    claude mcp add-json github '{`'{"type":"http","url":"https://api.githubcopilot.com/mcp","headers":{"Authorization":"Bearer YOUR_GITHUB_PAT"}}'`}'
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`claude mcp add-json github '{"type":"http","url":"https://api.githubcopilot.com/mcp","headers":{"Authorization":"Bearer YOUR_GITHUB_PAT"}}'`);
                    }}
                    className="p-3 text-text-muted hover:text-orange transition-colors border-l border-white/5"
                    title="Copy to clipboard"
                  >
                    <i className="bi bi-clipboard"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">4</div>
              <div className="flex-1">
                <p className="text-text-primary text-sm font-medium">Restart Claude Code</p>
                <p className="text-text-muted text-xs">Close and reopen Claude Code to load the MCP server</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center font-mono text-xs font-bold">
                <i className="bi bi-check text-xs"></i>
              </div>
              <div className="flex-1">
                <p className="text-text-primary text-sm font-medium">Verify it works</p>
                <p className="text-text-muted text-xs mb-2">In Terminal, run:</p>
                <div className="bg-bg-primary rounded-lg p-2 border border-white/5">
                  <code className="text-green-500 text-xs font-mono">claude mcp list</code>
                </div>
                <p className="text-text-muted text-xs mt-2">You should see <span className="text-orange font-mono">github</span> in the list</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5">
            <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
              <i className="bi bi-shield-check text-green-500"></i>
              Keep your token secure. Never commit it to version control.
            </div>
            <a
              href="https://github.com/github/github-mcp-server"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors text-sm"
            >
              <i className="bi bi-github"></i>
              View on GitHub
              <i className="bi bi-arrow-up-right text-xs"></i>
            </a>
          </div>
        </div>

        <CodeBlock
          code={githubMcpConfig}
          language="json"
          filename="~/.claude/settings.json"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-git"></i>
              PR Workflow
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-arrow-left-right text-purple-500"></i>Create branches automatically</li>
              <li className="flex items-center gap-2"><i className="bi bi-file-text text-purple-500"></i>Generate PR descriptions</li>
              <li className="flex items-center gap-2"><i className="bi bi-link-45deg text-purple-500"></i>Link to related issues</li>
              <li className="flex items-center gap-2"><i className="bi bi-people text-purple-500"></i>Request reviews</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-bug"></i>
              Issue Management
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-plus-circle text-green-500"></i>Create issues from bugs</li>
              <li className="flex items-center gap-2"><i className="bi bi-arrow-repeat text-green-500"></i>Update issue status</li>
              <li className="flex items-center gap-2"><i className="bi bi-tags text-green-500"></i>Add labels and assignees</li>
              <li className="flex items-center gap-2"><i className="bi bi-flag text-green-500"></i>Track milestones</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Custom Commands Section */}
      <Section
        id="commands"
        title="Custom Slash Commands"
        subtitle="Streamline your workflow with reusable commands"
      >
        <p className="text-text-muted">
          Slash commands let you create shortcuts for common tasks.
          Use built-in commands or create your own for your workflow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <CodeBlock
              code={commitCommand}
              language="bash"
              filename="/commit"
              showLineNumbers={false}
            />
          </div>
          <div>
            <CodeBlock
              code={reviewCommand}
              language="bash"
              filename="/review-pr"
              showLineNumbers={false}
            />
          </div>
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-terminal"></i>
            Creating Custom Commands
          </h4>
          <p className="text-text-muted text-sm mb-3">
            Add custom commands as markdown files in <span className="text-blue-500 font-mono">~/.claude/commands/</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2">
              <i className="bi bi-braces text-green-500"></i>
              <span className="text-green-500 font-mono text-sm">/swiftui-component</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="bi bi-check2-square text-green-500"></i>
              <span className="text-green-500 font-mono text-sm">/test-viewmodel</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="bi bi-globe text-green-500"></i>
              <span className="text-green-500 font-mono text-sm">/localize</span>
            </div>
          </div>
        </div>

        <CodeBlock
          code={customCommandExample}
          language="markdown"
          filename="~/.claude/commands/swiftui-component.md"
          showLineNumbers={false}
        />

        <div className="bg-orange/10 border border-orange/20 rounded-lg p-4">
          <p className="text-text-muted text-sm flex items-start gap-2">
            <i className="bi bi-lightbulb text-orange flex-shrink-0 mt-0.5"></i>
            <span>
              Use <span className="text-orange font-mono">$ARGUMENTS</span> in your command to pass dynamic values.
              For example: <span className="text-green-500 font-mono">/swiftui-component ProfileCard</span>
            </span>
          </p>
        </div>
      </Section>

      {/* Asset Creation Section */}
      <Section
        id="assets"
        title="Asset Creation with ChatGPT"
        subtitle="Let Claude craft the perfect prompts for visual assets"
      >
        <p className="text-text-muted">
          While Claude Code handles development, use ChatGPT/DALL-E for visual assets.
          The key: <span className="text-orange">Claude creates optimized prompts</span> that you paste into ChatGPT.
        </p>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-brush"></i>
            The Workflow
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-purple-500 font-mono flex items-center gap-1"><i className="bi bi-chat-text"></i></span>
              <div>
                <p className="text-text-primary text-sm">Describe your idea to Claude</p>
                <p className="text-text-muted text-xs">"I need an app icon for a habit tracking app with an owl theme"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-500 font-mono flex items-center gap-1"><i className="bi bi-magic"></i></span>
              <div>
                <p className="text-text-primary text-sm">Claude crafts the perfect prompt</p>
                <p className="text-text-muted text-xs">Optimized for DALL-E with specific details, style, and technical requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-500 font-mono flex items-center gap-1"><i className="bi bi-image"></i></span>
              <div>
                <p className="text-text-primary text-sm">Paste into ChatGPT and generate</p>
                <p className="text-text-muted text-xs">Get high-quality assets ready for your app</p>
              </div>
            </div>
          </div>
        </div>

        <TerminalWindow title="example conversation">
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-green-500">you:</span>
              <span className="text-text-muted ml-2">Create a DALL-E prompt for my habit app icon</span>
            </div>
            <div className="mt-2">
              <span className="text-purple-500">claude:</span>
              <span className="text-text-muted ml-2">Here's an optimized prompt:</span>
            </div>
            <div className="text-green-500 mt-2 pl-4 border-l border-white/10">
              "Minimal iOS app icon, friendly owl silhouette,
              deep purple to indigo gradient background,
              geometric low-poly style, centered composition,
              soft glow effect, App Store ready, 1024x1024,
              no text, professional quality"
            </div>
          </div>
        </TerminalWindow>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-app"></i>
              App Icons
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-chat-dots text-purple-500"></i>Describe concept to Claude</li>
              <li className="flex items-center gap-2"><i className="bi bi-gear text-purple-500"></i>Claude adds technical specs</li>
              <li className="flex items-center gap-2"><i className="bi bi-stars text-purple-500"></i>Generate in ChatGPT</li>
              <li className="flex items-center gap-2"><i className="bi bi-aspect-ratio text-purple-500"></i>Export at 1024x1024</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-phone"></i>
              Screenshots
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-camera text-green-500"></i>Capture actual app screens</li>
              <li className="flex items-center gap-2"><i className="bi bi-layers text-green-500"></i>Use Figma for device frames</li>
              <li className="flex items-center gap-2"><i className="bi bi-pencil text-green-500"></i>Claude writes marketing copy</li>
              <li className="flex items-center gap-2"><i className="bi bi-display text-green-500"></i>Export for all device sizes</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Complete Workflow Section */}
      <Section
        id="workflow"
        title="Complete Workflow"
        subtitle="From idea to App Store in four phases"
      >
        <p className="text-text-muted">
          This is the workflow I used to build <a href="https://github.com/Rektoooooo/ShadowLift" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">ShadowLift</a>, <a href="https://github.com/Rektoooooo/HabitFlow" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">HabitOwl</a>, and <a href="https://github.com/Rektoooooo/MealPrepAI" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">MealPrepAI</a>.
          Each phase leverages Claude Code's capabilities for maximum productivity.
        </p>

        <div className="space-y-4">
          {workflowSteps.map((item) => (
            <div key={item.step} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange/20 text-orange rounded-full flex items-center justify-center font-mono font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-text-primary font-semibold mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm mb-2">{item.description}</p>
                  <code className="text-green-500 text-sm font-mono">{item.command}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange/10 border border-orange/20 rounded-lg p-6">
          <h4 className="text-text-primary font-semibold mb-2">Lessons from 3 Apps</h4>
          <ul className="space-y-2 text-text-muted text-sm">
            <li>• <a href="https://github.com/Rektoooooo/ShadowLift" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">ShadowLift</a> - Learned to structure SwiftData models for complex relationships</li>
            <li>• <a href="https://github.com/Rektoooooo/HabitFlow" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">HabitOwl</a> - Mastered SwiftUI animations and the @Observable pattern</li>
            <li>• <a href="https://github.com/Rektoooooo/MealPrepAI" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">MealPrepAI</a> - Integrated API calls with proper error handling and loading states</li>
          </ul>
        </div>
      </Section>

      {/* Tips Section */}
      <Section
        id="tips"
        title="Tips & Best Practices"
        subtitle="Hard-won lessons from building with Claude Code"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, index) => {
            const icons = ['bi-file-earmark-text', 'bi-map', 'bi-hammer', 'bi-git', 'bi-phone', 'bi-exclamation-triangle'];
            return (
              <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <i className={`bi ${icons[index]} text-green-500 flex-shrink-0 mt-0.5`}></i>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">{tip.title}</h4>
                    <p className="text-text-muted text-sm">{tip.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <TerminalWindow title="final thoughts">
          <div className="space-y-2">
            <div className="text-text-muted">
              The key to success with Claude Code is clear communication.
            </div>
            <div className="text-text-muted">
              Treat Claude as a skilled collaborator, not a code generator.
            </div>
            <div className="mt-4">
              <span className="text-green-500">$</span>
              <span className="text-text-primary ml-2">exit</span>
            </div>
            <div className="text-orange">Happy building!</div>
          </div>
        </TerminalWindow>
      </Section>

      {/* Troubleshooting Section */}
      <Section
        id="troubleshooting"
        title="Troubleshooting"
        subtitle="Common issues and how to fix them"
      >
        <div className="space-y-3">
          {troubleshootingItems.map((item, index) => (
            <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <i className="bi bi-question-circle text-orange flex-shrink-0 mt-0.5"></i>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1">{item.question}</h4>
                  <p className="text-text-muted text-sm">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <i className="bi bi-chat-dots text-purple-500 flex-shrink-0 mt-0.5"></i>
            <div>
              <h4 className="text-text-primary font-semibold mb-1">Still stuck?</h4>
              <p className="text-text-muted text-sm">
                Describe your issue to Claude: "I'm having trouble with X. Here's what I've tried..."
                Claude can often diagnose and fix configuration issues directly.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Resources Section */}
      <Section
        id="resources"
        title="Resources"
        subtitle="Documentation, tools, and community"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-terminal border border-white/5 rounded-lg p-4 hover:border-orange/30 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <i className={`bi ${item.icon} text-orange text-xl group-hover:scale-110 transition-transform`}></i>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1 group-hover:text-orange transition-colors">
                    {item.title}
                    <i className="bi bi-arrow-up-right ml-2 text-xs opacity-50"></i>
                  </h4>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-6 text-center">
          <h4 className="text-text-primary font-semibold mb-2">Connect with Me</h4>
          <p className="text-text-muted text-sm mb-4">
            Building iOS apps with Claude Code? I'd love to hear about your experience.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/Rektoooooo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <i className="bi bi-twitter-x text-text-primary"></i>
              <span className="text-text-primary font-mono text-sm">@Rektoooooo</span>
            </a>
            <a
              href="https://github.com/Rektoooooo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <i className="bi bi-github text-text-primary"></i>
              <span className="text-text-primary font-mono text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
