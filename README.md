# webp/avif-cli

Command line utility to convert images to WebP/AVIF, requires Node.js 14.15.0+


## tldr

```sh
npx webp --input="/<path>/**/*.{jpg,jpeg,png}"
npx avif --input="/<path>/**/*.{jpg,jpeg,png}"
```



## Info

fork from: [lovell/avif-cli](https://github.com/lovell/avif-cli) and add webp-cli, thanks for the repo.

current version: v0.4.1

LICENSE: [Apache License 2.0](https://github.com/lovell/avif-cli/blob/main/LICENSE)




## webp-cli

### Usage

```sh
$ npx webp
```

By default, will search current directory for image files and create WebP variants.

Exit code is non-zero if one or more errors occured.

### Options

```
Options：
      --input           Input file name(s), supports globs/wildcards
                        [string] [default: "*.{jpg,jpeg,tif,tiff,webp,png,gif,svg}"]
      --output          Output directory, default is same directory as input
                                                              [string] [default: ""]
      --quality         quality, integer 1-100                [number] [default: 80]
      --alphaQuality    quality of alpha layer, integer 0-100[number] [default: 100]
      --lossless        use lossless compression mode     [boolean] [default: false]
      --nearLossless    use near_lossless compression mode[boolean] [default: false]
      --smartSubsample  use high quality chroma subsampling
                                                          [boolean] [default: false]
      --effort          CPU effort, between 0 (fastest) and 6 (slowest)
                                                               [number] [default: 4]
      --loop            number of animation iterations, use 0 for infinite
                        animation                              [number] [default: 0]
      --minSize         prevent use of animation key frames to minimise file
                        size (slow)                       [boolean] [default: false]
      --mixed           allow mixture of lossy and lossless animation frames
                        (slow)                            [boolean] [default: false]
      --force           force WebP output, otherwise attempt to use input format
                                                           [boolean] [default: true]
      --overwrite       Allow existing output files to be overwritten
                                                          [boolean] [default: false]
      --append-ext      Append .webp to the file name instead of replacing the
                        current extension (foo.jpg => foo.jpg.webp)
                                                          [boolean] [default: false]
      --verbose         Write progress to stdout          [boolean] [default: false]
  -h, --help            Show help                                          [boolean]
      --version         Show version number                                [boolean]
```

### Examples

```sh
npx webp --verbose
```

```sh
npx webp --input="**/*.{jpg,jpeg}" --output="/another/path" --overwrite
```

```sh
npx webp --input="images/*.*" --effort=0 --quality=30
```



## avif-cli

### Usage

```sh
$ npx avif
```

By default, will search current directory for image files and create AVIF variants.

Exit code is non-zero if one or more errors occured.

### Options

```
Options:
      --input               Input file name(s), supports globs/wildcards
                    [string] [default: "*.{jpg,jpeg,tif,tiff,webp,png,gif,svg}"]
      --output              Output directory, default is same directory as input
                                                          [string] [default: ""]
      --quality             Quality vs file size, 1 (lowest/smallest) to 100
                            (highest/largest)             [number] [default: 50]
      --effort              CPU effort vs file size, 0 (fastest/largest) to 9
                            (slowest/smallest)             [number] [default: 4]
      --lossless            Use lossless compression  [boolean] [default: false]
      --chroma-subsampling  Set to '4:2:0' to use chroma subsampling
                         [string] [choices: "4:2:0", "4:4:4"] [default: "4:4:4"]
      --overwrite           Allow existing output files to be overwritten
                                                      [boolean] [default: false]
      --append-ext          Append .avif to the file name instead of replacing
                            the current extension (foo.jpg => foo.jpg.avif)
                                                      [boolean] [default: false]
      --verbose             Write progress to stdout  [boolean] [default: false]
  -h, --help                Show help                                  [boolean]
      --version             Show version number                        [boolean]
```

### Examples

```sh
npx avif --verbose
```

```sh
npx avif --input="**/*.{jpg,jpeg}" --output="/another/path" --overwrite
```

```sh
npx avif --input="images/*.*" --effort=0 --quality=30
```
