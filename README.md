<a name='readme-top'></a>

<br />
<div align="center">
<h3 align="center">react-action-router</h3>
<p align="center">
Responsive UI based on Location and user actions.
<br/>
</p>
</div>

<details>
 <summary>Table of Contents</summary>
 <ol>
   <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
   </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
</ol>
</details>

## About The Project

*react-action-router* implements a commonly required pattern in user interfaces.

Namely the need for alternating views based on some user action while at the

same time being Location aware.


For example, consider the case where a toolbar component contains a handfull of

buttons which are *not* links. Upon their pressing, a part of the currently

rendered UI outside of the toolbar is replaced by some other component while at

the same time the toolbar content is replaced with content related to the UI

just rendered. The replaced toolbar content usually contains a *back* button

which the user may press in order to return to the previously rendered UI. This

hierarchy of nested replaced UI's may be arbitrarily deep. I hope that this

example clearly demonstrates that a pattern is discernible. Namely the need to

replace components based on some user action while at the same time keeping a

record of those changes so that a user may easily navigate backwards and

forwards.


The previous example was meant to cover 1 of the 2 basic concerns of react-action-router.

The second exmaple is meant to clarify what is meant by the phrase *Location aware*


A few words about react-router-dom so that one might get a grasp of the
functionality that react-action-router should emulate among its own unique set
of capabilities.

In very simple terms react-router-dom provides an interface by which a user may
declare the UI that should be rendered under a specified URL. React-router-dom
then makes sure that the rendered UI is the correct one using the browsers
History and Location web API's. It also allows nested UI's to share state among
other things.

Why re-design such functionality if one is already offered by react-router-dom?

The reason is that react-router-dom only allows rendering 2 route trees
simultaneously if one splits the routes using a specific pattern but then one
loses the new Data Router functionality offered from version 6.0 and upwards.

As such i want to be able to continue using the new Data routers but at the same
time have a UI that is able to respond both at location change and user actions.

### Built with

## Getting Started

### Prerequisites

<p align='right'>(<a href="#readme-top">back to top</a>)</p>

### Installation

<p align='right'>(<a href="#readme-top">back to top</a>)</p>

## Usage

<p align='right'>(<a href="#readme-top">back to top</a>)</p>

## Roadmap

<p align='right'>(<a href="#readme-top">back to top</a>)</p>

- [ ] make useActionRouter be aware of URL changes without depending
on react-router-dom

## Contributing

<p align='right'>(<a href="#readme-top">back to top</a>)</p>

## License

<p align='right'>(<a href="#readme-top">back to top</a>)</p>

## Contact

<p align='right'>(<a href="#readme-top">back to top</a>)</p>
