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
  customCommandExamples,
  troubleshootingItems,
  resources,
  hooksConfigExample,
  hooksProtectSecretsExample,
  hooksUseCases,
  appStorePreparationSteps,
  appStoreUploadSteps,
  appStoreMetadata,
  appReviewGuidelines,
  commonRejectionReasons,
  testFlightSteps
} from './content/sections';

const BASE_URL = import.meta.env.BASE_URL;

function App() {
  const categories = [...new Set(skillsList.map(s => s.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skillsList.filter(s => s.category === selectedCategory)
    : skillsList;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/overview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more in the Claude Code documentation
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* CLAUDE.md Section */}
      <Section
        id="claude-md"
        title="CLAUDE.md Setup"
        subtitle="The foundation of every Claude Code project"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            <span className="text-orange font-mono">CLAUDE.md</span> is a special markdown file you place at your project's root directory.
            Think of it as a "briefing document" that tells Claude everything it needs to know about your codebase
            before it starts helping you.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Why it matters:</span> Without this file, Claude would need to
            explore your entire codebase to understand how things work. With CLAUDE.md, Claude immediately knows your
            architecture, build commands, coding conventions, and current development focus — making it far more effective
            from the first prompt.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">What to include:</span> Build commands (so Claude can verify code compiles),
            your app's architecture, data model relationships, design patterns you're using, and any specific rules Claude should follow.
            Here's a real example from <a href="https://github.com/Rektoooooo/MealPrepAI" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">MealPrepAI</a>.
          </p>
        </div>

        <CodeBlock
          code={claudeMdExample}
          language="markdown"
          filename="CLAUDE.md (from MealPrepAI)"
          showLineNumbers={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-orange font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-star"></i>
              Best Practices
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-hammer text-orange"></i>Include build commands</li>
              <li className="flex items-center gap-2"><i className="bi bi-diagram-3 text-orange"></i>Document architecture</li>
              <li className="flex items-center gap-2"><i className="bi bi-lightning text-orange"></i>Specify which skills to use</li>
              <li className="flex items-center gap-2"><i className="bi bi-arrow-repeat text-orange"></i>Update "Current Focus"</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-file-earmark-plus"></i>
              What to Include
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-code-slash text-purple-500"></i>Build & test commands</li>
              <li className="flex items-center gap-2"><i className="bi bi-boxes text-purple-500"></i>Data model relationships</li>
              <li className="flex items-center gap-2"><i className="bi bi-palette text-purple-500"></i>Design system/colors</li>
              <li className="flex items-center gap-2"><i className="bi bi-exclamation-triangle text-purple-500"></i>Known issues/limitations</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={`${BASE_URL}examples/CLAUDE-MealPrepAI.md`}
            download
            className="inline-flex items-center gap-2 text-orange hover:text-purple-500 transition-colors font-mono text-sm"
          >
            <i className="bi bi-download"></i> Download full CLAUDE.md example
          </a>

          <a
            href="https://docs.anthropic.com/en/docs/claude-code/memory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm"
          >
            <i className="bi bi-book"></i>
            Read more about CLAUDE.md and memory
            <i className="bi bi-arrow-up-right text-xs"></i>
          </a>
        </div>
      </Section>

      {/* Plan Mode Section */}
      <Section
        id="plan-mode"
        title="Plan Mode"
        subtitle="Design before you build"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            <span className="text-orange font-mono">Plan Mode</span> is a special workflow where Claude designs the architecture and
            implementation strategy <span className="text-text-primary">before</span> writing any code. Instead of diving straight into coding,
            Claude first explores your codebase, considers different approaches, and creates a detailed plan for your approval.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">How it works:</span> When you ask Claude to plan a feature
            (or it detects a complex task), it enters Plan Mode automatically. Claude reads relevant files, analyzes your
            architecture, and writes a <span className="text-orange font-mono">PLAN.md</span> file outlining the implementation phases,
            files to create/modify, and design decisions. You review and approve before any code is written.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Why use it:</span> Plan Mode prevents wasted effort on wrong approaches,
            documents architectural decisions for future reference, and ensures you and Claude are aligned on the implementation
            strategy. It's especially valuable for new features, complex refactoring, or multi-file changes.
          </p>
        </div>

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
              <li className="flex items-center gap-2"><i className="bi bi-diagram-3 text-purple-500"></i>API integration design</li>
              <li className="flex items-center gap-2"><i className="bi bi-window text-purple-500"></i>New screen/view creation</li>
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
              <li className="flex items-center gap-2"><i className="bi bi-arrow-counterclockwise text-green-500"></i>Easy to iterate on plan</li>
              <li className="flex items-center gap-2"><i className="bi bi-git text-green-500"></i>Plan file is version controlled</li>
            </ul>
          </div>
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-x-circle"></i>
            When NOT to Use Plan Mode
          </h4>
          <p className="text-text-muted text-sm mb-3">
            Skip plan mode for straightforward tasks that don't require architectural decisions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1 text-text-muted">
              <li className="flex items-center gap-2"><i className="bi bi-dash text-text-muted"></i>Bug fixes with clear solutions</li>
              <li className="flex items-center gap-2"><i className="bi bi-dash text-text-muted"></i>Adding a single simple view</li>
              <li className="flex items-center gap-2"><i className="bi bi-dash text-text-muted"></i>UI tweaks and styling changes</li>
            </ul>
            <ul className="space-y-1 text-text-muted">
              <li className="flex items-center gap-2"><i className="bi bi-dash text-text-muted"></i>Adding computed properties</li>
              <li className="flex items-center gap-2"><i className="bi bi-dash text-text-muted"></i>Writing tests for existing code</li>
              <li className="flex items-center gap-2"><i className="bi bi-dash text-text-muted"></i>Documentation and comments</li>
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

        <a
          href="https://code.claude.com/docs/en/common-workflows"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more about common workflows
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* iOS Developer Skills Section */}
      <Section
        id="skills"
        title="iOS Developer Skills"
        subtitle="28 specialized skills for every iOS development task"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            <span className="text-orange font-mono">Skills</span> are specialized instruction files that give Claude deep expertise
            in specific domains. Each skill is a <span className="text-orange font-mono">SKILL.md</span> file containing detailed
            knowledge about best practices, patterns, common pitfalls, and how to approach tasks in that area.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">How they work:</span> You install skills by placing them
            in <span className="text-blue-500 font-mono">~/.claude/skills/</span>. When working on a task, you tell Claude which skill
            to use (e.g., <span className="text-green-500 font-mono">"use the swiftui-views skill"</span>), or Claude can automatically
            route to the right skill through the hub skill. The skill's instructions are loaded into Claude's context, dramatically
            improving the quality and accuracy of its output.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">The ios-developer hub:</span> Start by using the <span className="text-orange font-mono">ios-developer</span> skill —
            it acts as a routing hub that analyzes your task and automatically activates the appropriate specialized skill (SwiftUI views,
            data persistence, networking, etc.). This means you don't need to remember which specific skill to use for each task.
          </p>
        </div>

        {/* Download + Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <a
            href={`${BASE_URL}ios-skills-pack.zip`}
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[rgb(217,145,120)] text-[rgb(10,10,10)] font-mono font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <i className="bi bi-download"></i>
            <span>Download All 28 Skills</span>
          </a>
          <div className="flex-1 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
                selectedCategory === null
                  ? 'bg-white/20 text-text-primary'
                  : 'bg-white/5 text-text-muted hover:bg-white/10'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-white/20 text-text-primary'
                    : 'bg-white/5 text-text-muted hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              description={skill.description}
              category={skill.category}
              downloadUrl={`${BASE_URL}skills/${skill.name}/SKILL.md`}
            />
          ))}
        </div>

        {/* Installation & Usage - Compact */}
        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="text-orange font-mono mb-2 flex items-center gap-2">
                <i className="bi bi-folder-symlink"></i>
                Install
              </h4>
              <code className="text-green-500 font-mono text-xs block">~/.claude/skills/[name]/SKILL.md</code>
            </div>
            <div>
              <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
                <i className="bi bi-terminal"></i>
                Use
              </h4>
              <code className="text-green-500 font-mono text-xs block">"use ios-developer skill"</code>
            </div>
            <div>
              <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
                <i className="bi bi-lightbulb"></i>
                Tip
              </h4>
              <p className="text-text-muted text-xs">Add to CLAUDE.md for auto-use</p>
            </div>
          </div>
        </div>

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/skills"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more about Skills
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* Custom Commands Section */}
      <Section
        id="commands"
        title="Custom Slash Commands"
        subtitle="Streamline your workflow with reusable commands"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            <span className="text-orange font-mono">Slash commands</span> are shortcuts that trigger predefined prompts or
            actions. Instead of typing out the same instructions repeatedly, you type a short command
            like <span className="text-green-500 font-mono">/commit</span> and Claude executes a detailed, well-crafted prompt
            behind the scenes.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Built-in vs Custom:</span> Claude Code comes with built-in
            commands like <span className="text-green-500 font-mono">/commit</span> (creates semantic commits) and
            <span className="text-green-500 font-mono">/review-pr</span> (reviews pull requests). But you can also create
            your own custom commands for tasks specific to your workflow — like generating SwiftUI components, writing tests,
            or localizing strings.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">How to create them:</span> Custom commands are simple markdown
            files placed in <span className="text-blue-500 font-mono">~/.claude/commands/</span>. The filename becomes the
            command name (e.g., <span className="text-blue-500 font-mono">swiftui-component.md</span> becomes
            <span className="text-green-500 font-mono">/swiftui-component</span>). Inside the file, you write the prompt
            that Claude should follow when the command is invoked.
          </p>
        </div>

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
            {customCommandExamples.slice(0, 3).map((cmd) => (
              <div key={cmd.name} className="flex items-center gap-2">
                <i className="bi bi-terminal text-green-500"></i>
                <span className="text-green-500 font-mono text-sm">/{cmd.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-text-primary font-semibold flex items-center gap-2">
            <i className="bi bi-collection text-orange"></i>
            iOS Command Examples
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customCommandExamples.map((cmd) => (
              <div key={cmd.name} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500 font-mono text-sm">/{cmd.name}</span>
                </div>
                <p className="text-text-muted text-xs mb-3">{cmd.description}</p>
                <div className="bg-bg-primary rounded p-2 border border-white/5">
                  <code className="text-text-muted text-xs font-mono whitespace-pre-wrap">{cmd.content.split('\n').slice(0, 3).join('\n')}...</code>
                </div>
              </div>
            ))}
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

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <p className="text-text-muted text-sm flex items-start gap-2">
            <i className="bi bi-arrow-repeat text-purple-500 flex-shrink-0 mt-0.5"></i>
            <span>
              <span className="text-text-primary font-semibold">Important:</span> After adding new slash commands, you need to restart Claude Code to see them.
              Type <span className="text-green-500 font-mono">/exit</span> and run <span className="text-green-500 font-mono">claude</span> again.
            </span>
          </p>
        </div>

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/slash-commands"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more about slash commands
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* Hooks Section */}
      <Section
        id="hooks"
        title="Hooks"
        subtitle="Automate workflows before and after Claude's actions"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            <span className="text-orange font-mono">Hooks</span> allow you to run custom commands before or after
            Claude uses a tool. They're powerful for implementing automated workflows like running SwiftLint after file edits,
            verifying builds when code changes, or protecting sensitive files like API keys and config files.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">How they work:</span> When Claude uses a tool (like Edit or Read),
            hooks can intercept the action. <span className="text-purple-500 font-mono">PreToolUse</span> hooks run <span className="text-text-primary">before</span> the
            tool executes and can block operations. <span className="text-green-500 font-mono">PostToolUse</span> hooks run <span className="text-text-primary">after</span> and
            can trigger follow-up actions like linting or building.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">iOS use cases:</span> Protect your <span className="text-orange font-mono">.xcconfig</span> files
            from being read, auto-run SwiftLint after Swift file edits, trigger <span className="text-orange font-mono">xcodebuild</span> to
            verify compilation, or format code automatically with swift-format.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {hooksUseCases.map((hook, index) => (
            <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <i className={`bi ${hook.icon} text-orange flex-shrink-0 mt-0.5`}></i>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-text-primary font-semibold">{hook.title}</h4>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${hook.type === 'PreToolUse' ? 'bg-purple-500/20 text-purple-500' : 'bg-green-500/20 text-green-500'}`}>
                      {hook.type}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm">{hook.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4 mb-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-gear"></i>
            Hook Configuration
          </h4>
          <p className="text-text-muted text-sm mb-3">
            Hooks are defined in your Claude settings files. You can add them to:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <i className="bi bi-globe text-purple-500 flex-shrink-0 mt-0.5"></i>
              <div>
                <span className="text-blue-500 font-mono">~/.claude/settings.json</span>
                <span className="text-text-muted"> — Global (all projects)</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="bi bi-folder text-green-500 flex-shrink-0 mt-0.5"></i>
              <div>
                <span className="text-blue-500 font-mono">.claude/settings.json</span>
                <span className="text-text-muted"> — Project (shared with team)</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="bi bi-person text-orange flex-shrink-0 mt-0.5"></i>
              <div>
                <span className="text-blue-500 font-mono">.claude/settings.local.json</span>
                <span className="text-text-muted"> — Personal (not committed)</span>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          code={hooksConfigExample}
          language="json"
          filename="~/.claude/settings.json"
        />

        <CodeBlock
          code={hooksProtectSecretsExample}
          language="javascript"
          filename="hooks/protect-secrets.js"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-shield-exclamation"></i>
              PreToolUse
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-arrow-right text-purple-500"></i>Runs before tool executes</li>
              <li className="flex items-center gap-2"><i className="bi bi-x-circle text-purple-500"></i>Can block operations (exit code 2)</li>
              <li className="flex items-center gap-2"><i className="bi bi-shield-lock text-purple-500"></i>Protect sensitive files</li>
              <li className="flex items-center gap-2"><i className="bi bi-chat-dots text-purple-500"></i>Send feedback to Claude</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-check2-circle"></i>
              PostToolUse
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-arrow-right text-green-500"></i>Runs after tool executes</li>
              <li className="flex items-center gap-2"><i className="bi bi-magic text-green-500"></i>Run follow-up actions</li>
              <li className="flex items-center gap-2"><i className="bi bi-braces text-green-500"></i>Auto-format or lint code</li>
              <li className="flex items-center gap-2"><i className="bi bi-hammer text-green-500"></i>Trigger builds automatically</li>
            </ul>
          </div>
        </div>

        <TerminalWindow title="exit codes">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-green-500 font-mono">Exit 0</span>
              <span className="text-text-muted">— Allow the operation to proceed</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500 font-mono">Exit 2</span>
              <span className="text-text-muted">— Block the operation (PreToolUse only)</span>
            </div>
            <div className="text-text-muted mt-3">
              When blocked, stderr is sent to Claude as feedback explaining why.
            </div>
          </div>
        </TerminalWindow>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-magic"></i>
            Creating Hooks with Claude Code
          </h4>
          <p className="text-text-muted text-sm mb-3">
            The easiest way to create hooks is to simply ask Claude. It will create both the configuration
            and the hook script files for you automatically.
          </p>
          <div className="space-y-3">
            <div className="bg-bg-primary rounded-lg p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500 font-mono text-sm">you:</span>
                <span className="text-text-muted font-mono text-sm">"Create a hook that runs SwiftLint after I edit Swift files"</span>
              </div>
              <p className="text-text-muted text-xs mb-2">Claude will automatically create:</p>
              <ul className="text-text-muted text-xs space-y-1 ml-4">
                <li className="flex items-center gap-2">
                  <i className="bi bi-file-earmark-code text-blue-500"></i>
                  <span className="text-blue-500 font-mono">.claude/settings.json</span> — Hook configuration
                </li>
                <li className="flex items-center gap-2">
                  <i className="bi bi-file-earmark-code text-green-500"></i>
                  <span className="text-blue-500 font-mono">.claude/hooks/run-swiftlint.sh</span> — Hook script
                </li>
              </ul>
            </div>
            <div className="bg-bg-primary rounded-lg p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500 font-mono text-sm">you:</span>
                <span className="text-text-muted font-mono text-sm">"Add a hook to block reading my .xcconfig files"</span>
              </div>
              <p className="text-text-muted text-xs">Claude creates a PreToolUse hook with the protection logic</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5">
            <p className="text-text-muted text-xs flex items-center gap-2">
              <i className="bi bi-info-circle text-blue-500"></i>
              Use <span className="text-green-500 font-mono">/hooks</span> to view and manage your registered hooks
            </p>
          </div>
        </div>

        <div className="bg-orange/10 border border-orange/20 rounded-lg p-4">
          <p className="text-text-muted text-sm flex items-start gap-2">
            <i className="bi bi-lightbulb text-orange flex-shrink-0 mt-0.5"></i>
            <span>
              <span className="text-text-primary font-semibold">Pro tip:</span> Use hooks to run <span className="text-orange font-mono">xcodebuild</span> after
              Swift file edits. Claude will see build errors immediately and fix them automatically, creating a tighter feedback loop.
            </span>
          </p>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <p className="text-text-muted text-sm flex items-start gap-2">
            <i className="bi bi-arrow-repeat text-purple-500 flex-shrink-0 mt-0.5"></i>
            <span>
              <span className="text-text-primary font-semibold">Important:</span> After adding or modifying hooks, restart Claude Code for changes to take effect.
              Type <span className="text-green-500 font-mono">/exit</span> and run <span className="text-green-500 font-mono">claude</span> again.
            </span>
          </p>
        </div>

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/hooks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more about hooks
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* Xcode MCP Section */}
      <Section
        id="xcode-mcp"
        title="Xcode MCP"
        subtitle="Direct integration with Xcode for building and testing"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            <span className="text-orange font-mono">MCP (Model Context Protocol)</span> is a way to give Claude new capabilities
            by connecting it to external tools and services. Think of MCP servers as "plugins" that extend what Claude can do
            beyond just reading and writing code.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">What Xcode MCP does:</span> The Xcode MCP server gives Claude
            the ability to directly interact with Xcode — it can build your project, run tests, clean the build folder, and
            list available schemes. This means Claude can verify its code changes actually compile and pass tests, catching
            errors immediately instead of leaving you to discover them later.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Why it matters:</span> Without Xcode MCP, Claude writes code
            "blind" — it can't verify if the code compiles or if tests pass. With Xcode MCP, Claude builds after every change,
            sees any errors, and fixes them automatically. This creates a much tighter feedback loop and dramatically reduces
            bugs in the code you receive.
          </p>
        </div>

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

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-gear"></i>
            CLAUDE.md Integration
          </h4>
          <p className="text-text-muted text-sm mb-3">
            Add this to your CLAUDE.md to ensure Claude always verifies builds:
          </p>
          <div className="bg-bg-primary rounded-lg p-3 border border-white/5 font-mono text-sm">
            <div className="text-green-500">## Workflow Requirements</div>
            <div className="text-text-muted mt-2">1. **Build after every code change** using xcode_build</div>
            <div className="text-text-muted">2. **Fix any errors** before considering task complete</div>
            <div className="text-text-muted">3. **Run tests** for any logic changes</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-play-circle"></i>
              Build Flow
            </h4>
            <ol className="space-y-1 text-text-muted text-sm list-decimal list-inside">
              <li>Claude writes code</li>
              <li>Triggers xcode_build</li>
              <li>Sees any errors</li>
              <li>Fixes automatically</li>
              <li>Builds again to verify</li>
            </ol>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-check2-square"></i>
              Test Flow
            </h4>
            <ol className="space-y-1 text-text-muted text-sm list-decimal list-inside">
              <li>Write/modify code</li>
              <li>Run xcode_test</li>
              <li>See failures with details</li>
              <li>Fix failing tests</li>
              <li>Verify all pass</li>
            </ol>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-orange font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-arrow-repeat"></i>
              Clean Build
            </h4>
            <ol className="space-y-1 text-text-muted text-sm list-decimal list-inside">
              <li>Cache issues suspected</li>
              <li>Run xcode_clean</li>
              <li>Clears DerivedData</li>
              <li>Fresh build starts</li>
              <li>Resolves stale cache</li>
            </ol>
          </div>
        </div>

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/mcp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more about MCP servers
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* GitHub MCP Section */}
      <Section
        id="github-mcp"
        title="GitHub MCP"
        subtitle="Manage PRs, issues, and repos from the terminal"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            The <span className="text-orange font-mono">GitHub MCP</span> server connects Claude directly to your GitHub
            repositories, giving it the ability to interact with pull requests, issues, and repository data without you
            needing to switch to the GitHub website or use the gh CLI manually.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">What it enables:</span> Claude can create branches, open pull
            requests with detailed descriptions, read and respond to PR comments, create and update issues, add labels,
            and manage your repository workflow — all from within your Claude Code conversation.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Real-world use:</span> After implementing a feature, you can
            simply say "create a PR for these changes" and Claude will create the branch, push the commits, and open a
            well-documented pull request. Or ask Claude to "look at the open issues and pick one to work on" — it can read
            the issue details and start implementing the solution.
          </p>
        </div>

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

        <TerminalWindow title="github workflow examples">
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-green-500">you:</span>
              <span className="text-text-muted ml-2">"Create a PR for these authentication changes"</span>
            </div>
            <div className="text-text-muted pl-4 border-l border-white/10">
              Claude creates branch, pushes, opens PR with detailed description
            </div>
            <div className="mt-2">
              <span className="text-green-500">you:</span>
              <span className="text-text-muted ml-2">"Look at open issues and pick one to work on"</span>
            </div>
            <div className="text-text-muted pl-4 border-l border-white/10">
              Claude lists issues, you choose one, Claude starts implementation
            </div>
            <div className="mt-2">
              <span className="text-green-500">you:</span>
              <span className="text-text-muted ml-2">"Create an issue for this bug I just found"</span>
            </div>
            <div className="text-text-muted pl-4 border-l border-white/10">
              Claude creates well-formatted issue with reproduction steps
            </div>
          </div>
        </TerminalWindow>

        <a
          href="https://github.com/github/github-mcp-server"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-github"></i>
          Read more on GitHub MCP Server repository
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* App Store Preparation Section */}
      <Section
        id="app-preparation"
        title="App Store Preparation"
        subtitle="Everything you need before uploading to the App Store"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            Before you can upload your app to the App Store, you need to complete several preparation steps.
            Missing any of these will cause your upload or review to fail. Use this checklist to ensure
            you're ready for submission.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Claude can help:</span> Ask Claude to
            "review my app for App Store submission" using the <span className="text-orange font-mono">ios-release-manager</span> skill.
            It will check your Info.plist, icons, and common issues before you submit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {appStorePreparationSteps.map((item) => (
            <div key={item.step} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange/20 text-orange rounded-full flex items-center justify-center font-mono font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1 flex items-center gap-2">
                    <i className={`bi ${item.icon} text-orange text-sm`}></i>
                    {item.title}
                  </h4>
                  <p className="text-text-muted text-xs">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4 mb-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-file-earmark-text"></i>
            App Store Connect Metadata
          </h4>
          <p className="text-text-muted text-sm mb-3">
            Prepare these items in App Store Connect before or after uploading your build:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {appStoreMetadata.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <i className={`bi ${item.required ? 'bi-check-circle-fill text-green-500' : 'bi-circle text-text-muted'} flex-shrink-0 mt-0.5`}></i>
                <div>
                  <span className="text-text-primary">{item.field}</span>
                  <span className="text-text-muted text-xs block">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-phone"></i>
              Screenshot Requirements
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-check text-purple-500"></i>6.7" display (iPhone 15 Pro Max)</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-purple-500"></i>5.5" display (iPhone 8 Plus)</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-purple-500"></i>iPad Pro 12.9" (if universal)</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-purple-500"></i>Up to 10 screenshots per size</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-purple-500"></i>PNG or JPEG, no alpha</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-shield-check"></i>
              Privacy Requirements
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Privacy Policy URL</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>App Privacy questionnaire</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Info.plist usage descriptions</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Data collection disclosure</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Third-party SDK privacy</li>
            </ul>
          </div>
        </div>

        <TerminalWindow title="claude code helper">
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-green-500">you:</span>
              <span className="text-text-muted ml-2">"Check if my app is ready for App Store submission"</span>
            </div>
            <div className="mt-2 text-text-muted">
              Claude analyzes Info.plist, checks for missing icons, reviews privacy descriptions...
            </div>
            <div className="mt-2 text-orange">
              <i className="bi bi-exclamation-triangle mr-2"></i>
              Missing NSCameraUsageDescription in Info.plist
            </div>
            <div className="text-green-500">
              <i className="bi bi-check-lg mr-2"></i>
              App icons complete (1024x1024 included)
            </div>
          </div>
        </TerminalWindow>

        <a
          href="https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-apple"></i>
          Apple: Preparing your app for distribution
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* App Upload Section */}
      <Section
        id="app-upload"
        title="Upload to App Store"
        subtitle="Archive and upload your app using Xcode"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            Uploading to the App Store involves creating an archive of your app in Xcode, validating it,
            and then uploading to App Store Connect. The process is straightforward once your app is properly configured.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Tip:</span> Before archiving, do a final build
            with the Xcode MCP to ensure there are no compilation errors. Ask Claude to "build for release"
            to verify everything compiles correctly.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {appStoreUploadSteps.map((item) => (
            <div key={item.step} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center font-mono font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-text-primary font-semibold mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm mb-2">{item.description}</p>
                  <div className="bg-bg-primary rounded p-2 border border-white/5">
                    <code className="text-green-500 text-xs font-mono">{item.command}</code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4 mb-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-airplane"></i>
            TestFlight Beta Testing
          </h4>
          <p className="text-text-muted text-sm mb-3">
            Before submitting for App Store review, test with real users via TestFlight:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {testFlightSteps.map((item) => (
              <div key={item.step} className="bg-bg-primary rounded-lg p-3 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange font-mono font-bold">{item.step}</span>
                  <span className="text-text-primary text-sm font-semibold">{item.title}</span>
                </div>
                <p className="text-text-muted text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-cloud-upload"></i>
              Upload Methods
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-1-circle text-green-500"></i>Xcode (recommended)</li>
              <li className="flex items-center gap-2"><i className="bi bi-2-circle text-green-500"></i>Transporter app</li>
              <li className="flex items-center gap-2"><i className="bi bi-3-circle text-green-500"></i>altool (command line)</li>
              <li className="flex items-center gap-2"><i className="bi bi-4-circle text-green-500"></i>App Store Connect API</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-clock"></i>
              Processing Time
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-hourglass-split text-purple-500"></i>Upload: 5-15 minutes</li>
              <li className="flex items-center gap-2"><i className="bi bi-hourglass-split text-purple-500"></i>Processing: 10-30 minutes</li>
              <li className="flex items-center gap-2"><i className="bi bi-envelope text-purple-500"></i>Email when ready</li>
              <li className="flex items-center gap-2"><i className="bi bi-exclamation-triangle text-purple-500"></i>Issues emailed too</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange/10 border border-orange/20 rounded-lg p-4">
          <p className="text-text-muted text-sm flex items-start gap-2">
            <i className="bi bi-lightbulb text-orange flex-shrink-0 mt-0.5"></i>
            <span>
              <span className="text-text-primary font-semibold">Build number tip:</span> Each upload must have a unique
              build number. Increment it before each upload. Version can stay the same for multiple builds (e.g., 1.0.0 build 1, 1.0.0 build 2).
            </span>
          </p>
        </div>

        <a
          href="https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-apple"></i>
          Apple: Upload builds to App Store Connect
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* App Review Section */}
      <Section
        id="app-review"
        title="App Store Review"
        subtitle="What to expect and how to avoid rejection"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            Every app submitted to the App Store goes through Apple's review process. The review typically
            takes 24-48 hours but can be faster or slower. Understanding the guidelines helps you avoid rejection
            and get your app approved on the first try.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Review timeline:</span> Most apps are reviewed
            within 24 hours. Complex apps or first submissions may take longer. You can check status in App Store Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {appReviewGuidelines.slice(0, 3).map((category, index) => (
            <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <h4 className="text-orange font-mono mb-2 flex items-center gap-2">
                <i className={`bi ${['bi-shield', 'bi-speedometer2', 'bi-briefcase'][index]}`}></i>
                {category.category}
              </h4>
              <ul className="space-y-1 text-text-muted text-sm">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="bi bi-check text-green-500 flex-shrink-0 mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {appReviewGuidelines.slice(3).map((category, index) => (
            <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
                <i className={`bi ${['bi-palette', 'bi-file-earmark-text'][index]}`}></i>
                {category.category}
              </h4>
              <ul className="space-y-1 text-text-muted text-sm">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="bi bi-check text-green-500 flex-shrink-0 mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4 mb-4">
          <h4 className="text-red-500 font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-x-circle"></i>
            Common Rejection Reasons & Solutions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commonRejectionReasons.map((item, index) => (
              <div key={index} className="bg-bg-primary rounded-lg p-3 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <i className="bi bi-exclamation-triangle text-red-500"></i>
                  <span className="text-text-primary text-sm font-semibold">{item.reason}</span>
                </div>
                <p className="text-text-muted text-xs">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-chat-left-text"></i>
              If Rejected
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-1-circle text-green-500"></i>Read rejection reason carefully</li>
              <li className="flex items-center gap-2"><i className="bi bi-2-circle text-green-500"></i>Fix the specific issue</li>
              <li className="flex items-center gap-2"><i className="bi bi-3-circle text-green-500"></i>Reply if you disagree</li>
              <li className="flex items-center gap-2"><i className="bi bi-4-circle text-green-500"></i>Resubmit with fix</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-speedometer"></i>
              Expedited Review
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-info-circle text-purple-500"></i>Request for critical bugs</li>
              <li className="flex items-center gap-2"><i className="bi bi-calendar-event text-purple-500"></i>Time-sensitive events</li>
              <li className="flex items-center gap-2"><i className="bi bi-link-45deg text-purple-500"></i>Via App Store Connect</li>
              <li className="flex items-center gap-2"><i className="bi bi-clock text-purple-500"></i>Not guaranteed</li>
            </ul>
          </div>
        </div>

        <TerminalWindow title="pre-submission checklist">
          <div className="space-y-1 text-sm">
            <div className="text-green-500"><i className="bi bi-check-lg mr-2"></i>App tested on real devices</div>
            <div className="text-green-500"><i className="bi bi-check-lg mr-2"></i>Privacy policy URL added</div>
            <div className="text-green-500"><i className="bi bi-check-lg mr-2"></i>Screenshots match actual app</div>
            <div className="text-green-500"><i className="bi bi-check-lg mr-2"></i>Demo account provided (if needed)</div>
            <div className="text-green-500"><i className="bi bi-check-lg mr-2"></i>All links working</div>
            <div className="text-orange mt-2">Ready to submit!</div>
          </div>
        </TerminalWindow>

        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://developer.apple.com/app-store/review/guidelines/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm"
          >
            <i className="bi bi-apple"></i>
            App Store Review Guidelines
            <i className="bi bi-arrow-up-right text-xs"></i>
          </a>
          <a
            href="https://developer.apple.com/app-store/submitting/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm"
          >
            <i className="bi bi-apple"></i>
            Submitting to the App Store
            <i className="bi bi-arrow-up-right text-xs"></i>
          </a>
        </div>
      </Section>

      {/* Asset Creation Section */}
      <Section
        id="assets"
        title="Asset Creation with ChatGPT"
        subtitle="Let Claude craft the perfect prompts for visual assets"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            While Claude Code handles development, use ChatGPT/DALL-E for visual assets.
            The key: <span className="text-orange">Claude creates optimized prompts</span> that you paste into ChatGPT.
            This workflow combines Claude's understanding of your app with DALL-E's image generation capabilities.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Why this works:</span> Claude knows your app's theme, colors,
            and purpose from working on the code. It can craft detailed prompts that include technical specifications
            (resolution, style, composition) that lead to better results than vague descriptions.
          </p>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-app"></i>
              App Icons
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-chat-dots text-purple-500"></i>Describe concept</li>
              <li className="flex items-center gap-2"><i className="bi bi-gear text-purple-500"></i>Add technical specs</li>
              <li className="flex items-center gap-2"><i className="bi bi-stars text-purple-500"></i>Generate variants</li>
              <li className="flex items-center gap-2"><i className="bi bi-aspect-ratio text-purple-500"></i>Export 1024x1024</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-phone"></i>
              Screenshots
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-camera text-green-500"></i>Capture app screens</li>
              <li className="flex items-center gap-2"><i className="bi bi-layers text-green-500"></i>Add device frames</li>
              <li className="flex items-center gap-2"><i className="bi bi-pencil text-green-500"></i>Write marketing copy</li>
              <li className="flex items-center gap-2"><i className="bi bi-display text-green-500"></i>All device sizes</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-orange font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-image"></i>
              Onboarding
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-palette text-orange"></i>Match app theme</li>
              <li className="flex items-center gap-2"><i className="bi bi-card-image text-orange"></i>Create illustrations</li>
              <li className="flex items-center gap-2"><i className="bi bi-type text-orange"></i>Feature highlights</li>
              <li className="flex items-center gap-2"><i className="bi bi-arrow-right text-orange"></i>Progress indicators</li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-blue-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-emoji-smile"></i>
              Empty States
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-inbox text-blue-500"></i>No data graphics</li>
              <li className="flex items-center gap-2"><i className="bi bi-search text-blue-500"></i>No results found</li>
              <li className="flex items-center gap-2"><i className="bi bi-wifi-off text-blue-500"></i>Offline state</li>
              <li className="flex items-center gap-2"><i className="bi bi-check-circle text-blue-500"></i>Success states</li>
            </ul>
          </div>
        </div>

        <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
          <h4 className="text-orange font-mono mb-3 flex items-center gap-2">
            <i className="bi bi-lightbulb"></i>
            Prompt Tips for iOS Assets
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-text-primary font-semibold mb-2">Include in your prompts:</p>
              <ul className="space-y-1 text-text-muted">
                <li>• Resolution (1024x1024 for icons)</li>
                <li>• Style (flat, gradient, 3D, minimal)</li>
                <li>• "No text" for app icons</li>
                <li>• "Centered composition"</li>
                <li>• Color palette from your app</li>
              </ul>
            </div>
            <div>
              <p className="text-text-primary font-semibold mb-2">Avoid in prompts:</p>
              <ul className="space-y-1 text-text-muted">
                <li>• Vague descriptions</li>
                <li>• Too many competing elements</li>
                <li>• Complex scenes for icons</li>
                <li>• Text on app icons</li>
                <li>• Copyrighted characters</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange/10 border border-orange/20 rounded-lg p-4">
          <p className="text-text-muted text-sm flex items-start gap-2">
            <i className="bi bi-info-circle text-orange flex-shrink-0 mt-0.5"></i>
            <span>
              <span className="text-text-primary font-semibold">Pro tip:</span> After generating an image, ask Claude to review it
              against Apple's Human Interface Guidelines and suggest improvements before finalizing.
            </span>
          </p>
        </div>

        <a
          href="https://openai.com/index/dall-e-3/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-image"></i>
          Read more about DALL-E 3
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* Complete Workflow Section */}
      <Section
        id="workflow"
        title="Complete Workflow"
        subtitle="From idea to App Store in six phases"
      >
        <div className="space-y-3 mb-6">
          <p className="text-text-muted">
            This workflow is refined from building multiple iOS apps with Claude Code. Each phase builds
            on the previous one, leveraging specific skills and tools for maximum productivity.
          </p>
          <p className="text-text-muted">
            <span className="text-text-primary font-semibold">Key principle:</span> Plan thoroughly, build iteratively,
            test continuously. Don't rush to code — the planning phase saves significant time by catching issues early.
          </p>
        </div>

        <div className="space-y-4">
          {workflowSteps.map((item) => (
            <div key={item.step} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange/20 text-orange rounded-full flex items-center justify-center font-mono font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-text-primary font-semibold mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm mb-3">{item.description}</p>
                  <div className="bg-bg-primary rounded-lg p-2 border border-white/5">
                    <code className="text-green-500 text-sm font-mono">{item.command}</code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-purple-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-clock-history"></i>
              Time Investment
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-mono text-xs mt-0.5">40%</span>
                <span>Planning & Architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-mono text-xs mt-0.5">35%</span>
                <span>Feature Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-mono text-xs mt-0.5">15%</span>
                <span>Testing & Polish</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-mono text-xs mt-0.5">10%</span>
                <span>App Store Prep</span>
              </li>
            </ul>
          </div>
          <div className="bg-bg-terminal border border-white/5 rounded-lg p-4">
            <h4 className="text-green-500 font-mono mb-2 flex items-center gap-2">
              <i className="bi bi-check-circle"></i>
              Success Checklist
            </h4>
            <ul className="space-y-1 text-text-muted text-sm">
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>CLAUDE.md with architecture</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Xcode MCP installed</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Plan approved before coding</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Regular commits with /commit</li>
              <li className="flex items-center gap-2"><i className="bi bi-check text-green-500"></i>Device testing throughout</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange/10 border border-orange/20 rounded-lg p-6">
          <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
            <i className="bi bi-lightbulb text-orange"></i>
            Lessons from Building iOS Apps
          </h4>
          <ul className="space-y-2 text-text-muted text-sm">
            <li className="flex items-start gap-2">
              <i className="bi bi-arrow-right text-orange flex-shrink-0 mt-1"></i>
              <span><span className="text-text-primary font-semibold">Plan Mode is essential</span> — Spending time on architecture upfront prevents major refactoring later</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-arrow-right text-orange flex-shrink-0 mt-1"></i>
              <span><span className="text-text-primary font-semibold">SwiftData relationships</span> — Define your data model carefully. @Relationship annotations need proper inverse relationships</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-arrow-right text-orange flex-shrink-0 mt-1"></i>
              <span><span className="text-text-primary font-semibold">@Observable over ObservableObject</span> — The new macro-based approach is cleaner and more performant</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-arrow-right text-orange flex-shrink-0 mt-1"></i>
              <span><span className="text-text-primary font-semibold">Build frequently</span> — Let Xcode MCP catch errors immediately. Fixing small issues is easier than debugging large changes</span>
            </li>
          </ul>
        </div>

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/tutorials"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more tutorials
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* Tips Section */}
      <Section
        id="tips"
        title="Tips & Best Practices"
        subtitle="Hard-won lessons from building with Claude Code"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => {
            const icons = [
              'bi-file-earmark-text', 'bi-map', 'bi-hammer', 'bi-git',
              'bi-phone', 'bi-exclamation-triangle', 'bi-cpu', 'bi-eye',
              'bi-list-task', 'bi-code-square', 'bi-shield-lock', 'bi-folder-symlink'
            ];
            return (
              <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <i className={`bi ${icons[index] || 'bi-lightbulb'} text-green-500 flex-shrink-0 mt-0.5`}></i>
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

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/best-practices"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more best practices
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* Troubleshooting Section */}
      <Section
        id="troubleshooting"
        title="Troubleshooting"
        subtitle="Common issues and how to fix them"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {troubleshootingItems.map((item, index) => (
            <div key={index} className="bg-bg-terminal border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <i className="bi bi-question-circle text-orange flex-shrink-0 mt-0.5"></i>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1 text-sm">{item.question}</h4>
                  <p className="text-text-muted text-xs">{item.answer}</p>
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

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/troubleshooting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-orange transition-colors text-sm mt-4"
        >
          <i className="bi bi-book"></i>
          Read more troubleshooting tips
          <i className="bi bi-arrow-up-right text-xs"></i>
        </a>
      </Section>

      {/* Resources Section */}
      <Section
        id="resources"
        title="Resources"
        subtitle="Documentation, tools, and community"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-terminal border border-white/5 rounded-lg p-4 hover:border-orange/30 transition-colors group"
            >
              <div className="flex flex-col items-start gap-2">
                <i className={`bi ${item.icon} text-orange text-xl group-hover:scale-110 transition-transform`}></i>
                <div>
                  <h4 className="text-text-primary font-semibold mb-1 group-hover:text-orange transition-colors">
                    {item.title}
                    <i className="bi bi-arrow-up-right ml-2 text-xs opacity-50"></i>
                  </h4>
                  <p className="text-text-muted text-xs">{item.description}</p>
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
