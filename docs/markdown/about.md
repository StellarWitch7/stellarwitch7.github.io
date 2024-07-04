# About Me

[Home Page](https://stellarwitch7.github.io)

```
extend #Human to pub type Aurora {
    pub names #[#str];
    pub pronouns #[#PronounSet];

    pub init() {
        self.names = #str["Aurora", "Auri", "Aura", "Aur"];
        self.pronouns = #PronounSet[init #PronounSet("they"), init #PronounSet("she")];

        ret self
    }
}

extend #Programmer for #Aurora {
    pub fn Sleep() #void {
        // no time, we can later
        #Task.Schedule(self.Sleep, #Time.FromText("2h");
        ret
    }
}
```

<a href="https://pride-gen.rash.codes">
  <img src="https://raw.githubusercontent.com/StellarWitch7/StellarWitch7/main/enby.svg" width="50" height="50">
</a>
<a href="https://pride-gen.rash.codes">
  <img src="https://raw.githubusercontent.com/StellarWitch7/StellarWitch7/main/trans.svg" width="50" height="50">
</a>
<a href="https://pride-gen.rash.codes">
  <img src="https://raw.githubusercontent.com/StellarWitch7/StellarWitch7/main/bi.svg" width="50" height="50">
</a>

## Languages I'm Interested In

[![](https://skillicons.dev/icons?i=rust,mysql,c,cpp,ts,html,css)](https://skillicons.dev)

## Known Languages

[![](https://skillicons.dev/icons?i=cs,nix,bash,md,py,java)](https://skillicons.dev)

## Tools I've Used

[![](https://skillicons.dev/icons?i=git,visualstudio,vscode,rider,idea,clion,pycharm,octave,blender)](https://skillicons.dev)

## Operating Systems I've Used

[![](https://skillicons.dev/icons?i=nix,arch,windows)](https://skillicons.dev)

## Socials

- GitHub: [@StellarWitch7](https://github.com/StellarWitch7)
- Discord: @stellarwitch7

[![I am present on GitHub and Discord primarily](https://skillicons.dev/icons?i=github,discord)](https://skillicons.dev)

## Current Projects

- [moth-lang](https://github.com/StellarWitch7/moth-lang), a compiler written in C# that converts from my custom Moth language to C-compatible code using LLVM. Includes the `luna` build tool and `silk` bindings generator. 
  - [moth-core](https://github.com/StellarWitch7/moth-core), the standard library for Moth.
  - [moth-dev](https://github.com/StellarWitch7/moth-dev), a VS Code extension providing syntax highlighting for Moth source code files. 
- [ConnectR](https://github.com/StellarWitch7/connectr), a server written in Rust meant for filehosting and messaging. 

## Archived Projects

- [Stellar Dice Calculator](https://github.com/StellarWitch7/DiceCalculator), an overly complicated program to calculate the most likely output from a dice roll. 

## Nix Package Repository

I host my personal Nix packages publicly at [`StellarWitch/nurpkgs`](https://github.com/StellarWitch7/nurpkgs). All package definitions are licensed under MIT. 

## Proud PRs

- [Do A Barrel Roll Syntax Highlighting](https://github.com/enjarai/do-a-barrel-roll/pull/103)

## Details

[![Metrics](https://raw.githubusercontent.com/StellarWitch7/StellarWitch7/main/github-metrics.svg)](https://github.com/lowlighter/metrics)
